import requests
from bs4 import BeautifulSoup

def scrape_unp_website(url):
    # Send an HTTP GET request to the URL
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Failed to fetch the page. Status code: {response.status_code}")
        return None

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all news articles on the page
    news_articles = soup.find_all('div', class_='news-content')

    scraped_data = []

    for article in news_articles:
        # Extract the title and content of each news article
        title = article.find('h4', class_='title').text.strip()
        content = article.find('div', class_='content').text.strip()

        # Append the data to the result list
        scraped_data.append({
            'Title': title,
            'Content': content,
        })

    return scraped_data

if __name__ == "__main__":
    # URL of the Universitas Negeri Padang (UNP) website to scrape
    target_url = "https://unp.ac.id/"

    # Call the scraping function and get the result
    scraped_data = scrape_unp_website(target_url)

    # Display the scraped data
    if scraped_data:
        for article in scraped_data:
            print(f"Title: {article['Title']}")
            print(f"Content: {article['Content']}")
            print("-------------------")
    else:
        print("No data scraped.")
