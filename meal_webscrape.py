from bs4 import BeautifulSoup
import requests
from csv import writer
import re

def write_nutrition(food_link, food_row, header):
    already_used = set()
    r = requests.get(food_link)
    soup = BeautifulSoup(r.content, 'html.parser')
    for nutr in soup.find_all('span', class_ = 'nutfactstopnutrient'):
        info = nutr.text.strip()
        for item in header:
            if (item in info):
               m = re.search(r"\d", info)
               if (m is None):
                   info = '0'
               else:
                   info = info[m.start():]
               if (header.index(item) not in already_used):
                   food_row.append(info)
                   already_used.add(header.index(item))
                   
                   
    food_row.append('No')
    food_row.append('No')
    
    for div in soup.find_all('span', class_ = 'labelwebcodesvalue'):
        for restriction in div.find_all('img', alt = True):
            if (restriction['alt'] in header):
                food_row[header.index(restriction['alt'])] = 'Yes'
    return food_row
        
                


def meal_webscrape(month, day):
    # setting up html parser for j2 menu
    url = 'https://hf-food.austin.utexas.edu/foodpro/longmenu.aspx?sName=University+Housing+and+Dining&locationNum=12&locationName=J2+Dining&naFlag=1&WeeksMenus=This+Week%27s+Menus&dtdate=0' + str(month) + '%2f0' + str(day) + '%2f2023&mealName=Breakfast'
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')

    #formatting for csv file - will be named breakfast.csv
    with open('breakfast.csv', 'a', encoding = 'utf8', newline = '') as f:
        my_writer = writer(f)
    
        #categories of columns
        header = ['Name', 'Fat', 'Total Sugars', 'Cholesterol', 'Sodium', 'Protein', 
                  'Calories', 'Carbohydrates', 'Vegan', 'Contains Wheat']
        my_writer.writerow(header)
        for meal in soup.find_all('div', class_= 'longmenucoldispname'):
            food_row = []
            food_row.append(meal.text.strip())
            food_link = meal.find('a', href = True)['href']
            food_link = 'https://hf-food.austin.utexas.edu/foodpro/' + food_link
            food_row = write_nutrition(food_link, food_row, header)
            my_writer.writerow(food_row)
            
meal_webscrape(3, 3)