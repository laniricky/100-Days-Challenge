import requests
from bs4 import BeautifulSoup

url = "https://news.ycombinator.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

headlines = soup.find_all('a', class_='storylink')

print("Top News from Hacker News:")
for idx, headline in enumerate(headlines, 1):
    print(f"{idx}. {headline.text}")

