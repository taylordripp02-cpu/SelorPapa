import sys
import fitz

pdf_path = "/Users/maximeurbain/Desktop/CodeProjects/SelorPapa/assets/voca nl.PDF"
out_txt = "/Users/maximeurbain/Desktop/CodeProjects/SelorPapa/assets/voca_raw.txt"

doc = fitz.open(pdf_path)
text = ""
for page in doc:
    text += page.get_text()

with open(out_txt, "w", encoding="utf-8") as f:
    f.write(text)

print("Text extracted successfully.")
