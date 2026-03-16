import re
import json

raw_file = "/Users/maximeurbain/Desktop/CodeProjects/SelorPapa/assets/voca_raw.txt"
out_js = "/Users/maximeurbain/Desktop/CodeProjects/SelorPapa/vocabData.js"

with open(raw_file, "r", encoding="utf-8") as f:
    text = f.read()

# Replace common ligatures and curly quotes
text = text.replace("\ufb01", "fi")
text = text.replace("\ufb02", "fl")
text = text.replace("Ư", "ff")
text = text.replace("’", "'")
text = text.replace("‘", "'")
text = text.replace("–", "-")
text = text.replace("—", "-")

# Find all themes
theme_splits = re.split(r"THÈME\s+\d+\s*[-—]\s*([A-Za-z\sÊÉÈÀÔÎ]+)\s*\(", text)

themes = []

if len(theme_splits) > 1:
    for i in range(1, len(theme_splits), 2):
        theme_name = theme_splits[i].strip().title()
        theme_text = theme_splits[i+1]
        
        matches = re.finditer(r"(\d+)\.\s+(.*?)\s*→\s*(.*?)(?=\s+\d+\.\s+|$)", theme_text, re.DOTALL)
        
        words = []
        for m in matches:
            nl = re.sub(r"\s+", " ", m.group(2)).strip()
            fr = re.sub(r"\s+", " ", m.group(3)).strip()
            
            # Clean up known trailing headers like "A. L'entreprise"
            fr = re.sub(r"\s+[A-Z]\.\s+[A-Z].*", "", fr).strip()
            
            # Remove any characters that are not typical latin text, punctuation, or numbers
            nl = re.sub(r"[^a-zA-Z0-9\s.,'\"()/\-àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]", "", nl)
            fr = re.sub(r"[^a-zA-Z0-9\s.,'\"()/\-àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ]", "", fr)
            
            nl = re.sub(r"\s+", " ", nl).strip()
            fr = re.sub(r"\s+", " ", fr).strip()
            
            # Simple heuristic: Vocabulary words are usually short.
            # If a "translation" or "word" contains more than 6-7 actual words, it's likely a paragraph.
            if len(nl.split()) > 7 or len(fr.split()) > 7:
                continue
            
            if nl and fr:
                words.append({"nl": nl, "fr": fr})
                
        # Fix possible duplicate endings in FR from sub-headers that didn't match the regex perfectly
        for w in words:
            # Sometime French translation has the next category letter attached, like "le marché du travail B. Travail & tâches"
            # We can cut at " B. " or " C. ", etc.
            match = re.search(r"\s+[A-Z]\.\s+", w["fr"])
            if match:
                w["fr"] = w["fr"][:match.start()].strip()
                
        themes.append({"theme": theme_name, "words": words})

js_content = f"const vocabData = {json.dumps(themes, indent=4)};"

with open(out_js, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Extracted {len(themes)} themes:")
for t in themes:
    print(f"- {t['theme']}: {len(t['words'])} words")
