from urllib.parse import urljoin
from urllib.request import urlopen
from bs4 import BeautifulSoup

url = "https://search.iisg.amsterdam/Search/Results?type=AllFields&filter%5B%5D=format%3A%22Visual+documents%22&filter%5B%5D=genre_facet%3A%22badge%22&facetSort="
html = urlopen(url)
soup = BeautifulSoup(html, "html.parser")


parent_url = 'https://search.iisg.amsterdam'
image_dict = {}
for img in soup.find_all('img'):
    image_dict[urljoin(parent_url, img.find_parent()['href'])] = urljoin(parent_url, img['src'])

