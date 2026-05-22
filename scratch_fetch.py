import urllib.request
import re
import json
import time

queries = {
    # Maruti Suzuki
    "swift": "suzuki swift car",
    "baleno": "suzuki hatchback car",
    "brezza": "suzuki vitara brezza suv",
    "fronx": "suzuki crossover suv",
    # Tata Motors
    "nexon": "tata nexon suv",
    "punch": "tata punch micro suv",
    "safari": "tata safari black suv",
    "harrier": "tata harrier dark suv",
    # Mahindra
    "scorpio": "mahindra scorpio n black suv",
    "xuv700": "mahindra xuv700 luxury suv",
    "thar": "mahindra thar offroad red",
    # Hyundai
    "creta": "hyundai creta white crossover",
    "verna": "hyundai verna sedan",
    "venue": "hyundai venue compact suv",
    "tucson": "hyundai tucson modern suv",
    "i20": "hyundai i20 hatchback",
    # Kia
    "seltos": "kia seltos sportage suv",
    "sonet": "kia sonet stonic compact suv",
    "carens": "kia carens mpv carnival",
    "ev6": "kia ev6 electric crossover",
    # Toyota
    "fortuner": "toyota fortuner legender suv",
    "innovahycross": "toyota innova hycross mpv",
    "hilux": "toyota hilux tacoma pickup truck",
    "glanza": "toyota glanza yaris hatchback",
    # Honda
    "city": "honda city accord sedan",
    "elevate": "honda elevate hrv crossover",
    "amaze": "honda amaze sedan",
    "civic": "honda civic type r grey",
    # BMW
    "3series": "bmw 3 series sedan blue",
    "5series": "bmw 5 series luxury sedan",
    "x5": "bmw x5 luxury suv black",
    "x1": "bmw x1 compact suv",
    "ix": "bmw ix electric suv white",
    # Mercedes-Benz
    "cclass": "mercedes c class sedan white",
    "eclass": "mercedes e class sedan silver",
    "amggt": "mercedes amg gt coupe",
    "sclass": "mercedes s class luxury sedan black",
    "gle": "mercedes gle luxury suv",
    # Audi
    "a4": "audi a4 sedan white",
    "q5": "audi q5 premium suv",
    "q7": "audi q7 large luxury suv",
    # Volkswagen
    "virtus": "volkswagen virtus jetta sedan",
    "taigun": "volkswagen taigun t-cross suv",
    "tiguan": "volkswagen tiguan premium suv",
    # Porsche
    "911": "porsche 911 sports car",
    "cayenne": "porsche cayenne luxury suv",
    "taycan": "porsche taycan electric sedan"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

results = {}

for key, query in queries.items():
    print(f"Searching for {key} ({query})...")
    url = f"https://unsplash.com/s/photos/{urllib.parse.quote(query)}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            # Find photo IDs (Unsplash URLs usually have photo-15XXXXXXXXX-XXXXXXXXXX or similar in src)
            # Or /photos/photo-name-ID
            # Let's extract the images src containing "images.unsplash.com/photo-"
            matches = re.findall(r'https://images\.unsplash\.com/(photo-[0-9a-zA-Z\-]+)', html)
            if matches:
                # Get unique matches in order of appearance
                unique_matches = []
                for m in matches:
                    if m not in unique_matches:
                        unique_matches.append(m)
                
                print(f"Found {len(unique_matches)} matches for {key}. Top match: {unique_matches[0]}")
                results[key] = unique_matches[:5]
            else:
                print(f"No matches found for {key}")
                results[key] = []
        time.sleep(1) # Be polite
    except Exception as e:
        print(f"Error searching for {key}: {e}")
        results[key] = []

with open("unsplash_results.json", "w") as f:
    json.dump(results, f, indent=2)
print("Finished. Saved to unsplash_results.json")
