import pygame
import asyncio
from pygame.locals import *
from pygame import mixer
import sys
from random import shuffle
import textwrap
import os

pygame.init()
mixer.init()

# Define the path to the directory where the script is located
BASE_PATH = os.path.dirname(__file__)

# Load background music and assets
mixer.music.load(os.path.join(BASE_PATH, "caribbean-beach-164232.ogg"))
mixer.music.play(-1)
pygame.mixer.music.set_volume(0.02)

# Screen setup
scale = (800, 600)
window = pygame.display.set_mode(scale)
bg_image = pygame.image.load(os.path.join(BASE_PATH, "background.jpg"))
bg_image = pygame.transform.scale(bg_image, scale)

# Colors
darkblue=(45, 22, 116)
red=(243,9,9)
green=(13,165,48)
white=(255,255,255)
darkerblueprimary= (45, 22, 116)
darkerblueprimarytransparent=(45, 22, 116)
lightpurpleprimary=(146, 113, 194)
titlepurple=(163, 118, 243)
garrisonred= (132, 19, 19)
edmpurple= (112, 58, 207)
edmpurplemobilesidena= (112, 58, 207)

# Screen dimensions
s_width = window.get_width()
s_height = window.get_height()

# Text font and size
font = pygame.font.SysFont("Corbel", 35, bold=True)

pygame.display.set_caption("FrontEnd Soundz Music Game")

# Questions and answers
questions = [
    "Which of the following is a popular genre of music originating from Trinidad and Tobago?",
    "What is the name of the musical instrument commonly associated with steelpan music?",
    "Bob Marley, a global icon in music, is associated with which Caribbean genre?",
    "Which Caribbean country is known for creating the genre of Reggaeton?",
    "What is the name of the annual celebration in Trinidad and Tobago that heavily features soca and calypso music?",
]

answers = [
    ["Calypso", "Reggae", "Salsa", "Merengue"],
    ["Steel Drum", "Conga Drum", "Maracas", "Bongos"],
    ["Reggae", "Soca", "Dancehall", "Zouk"],
    ["Puerto Rico", "Jamaica", "Cuba", "Haiti"],
    ["Carnival", "Junkanoo", "Fiesta de Santiago", "Crop Over"],
]

# Correct answers
correct_answers = [0, 0, 0, 0, 0]

for i in range(len(questions)):
    correct_answer = answers[i][correct_answers[i]]

    shuffle(answers[i])
    correct_answers[i] = answers[i].index(correct_answer)

# Game state
current_question = 0
selected_answer = None

# Define the next button
next_button = pygame.Rect(300, 450, 200, 50)
next_button_text = font.render("Next", True,white)


# Display current question and answers
def display_question():
    window.blit(bg_image, (0, 0))

    question_text = questions[current_question]
    wrapped_text = textwrap.fill(question_text, width=45)

    y_offset = 50
    for line in wrapped_text.splitlines():
        question_surface = font.render(line, True, darkblue)
        window.blit(question_surface, (50, y_offset))
        y_offset += 40

    for a, answer in enumerate(answers[current_question]):
        answer_text = font.render(answer, True, edmpurplemobilesidena)
        answer_rect = pygame.Rect(50, 190 + a * 50, 700, 40)
        pygame.draw.rect(window, white, answer_rect)
        pygame.draw.rect(window, edmpurplemobilesidena, answer_rect, 2)
        window.blit(answer_text, (60, 190 + 5 + a * 50))

        if selected_answer == a:
            pygame.draw.rect(window, green, answer_rect, 2)
        else:
            pygame.draw.rect(window, darkblue, answer_rect, 2)

    # Display the next button
    pygame.draw.rect(window, edmpurple, next_button)
    pygame.draw.rect(window, white, next_button, 2)
    window.blit(next_button_text, (350, 460))

    pygame.display.update()


async def check_answer():
    global current_question, selected_answer

    if selected_answer == correct_answers[current_question]:
        message_text = font.render("Correct!", True, green)
        window.blit(message_text, (350, 400))
        pygame.display.update()
        await asyncio.sleep(1)  # Use asyncio sleep
        current_question += 1
        selected_answer = None
    else:
        message_text = font.render("Try Again!", True, red)
        window.blit(message_text, (350, 400))
        pygame.display.update()
        await asyncio.sleep(1)  # Use asyncio sleep

    # Check if all questions have been answered
    if current_question >= len(questions):
        window.blit(bg_image, (0, 0))
        message_text = font.render("Quiz Completed!", True, darkblue)
        window.blit(message_text, (250, 300))
        pygame.display.update()
        await asyncio.sleep(3)  # Use asyncio sleep
        pygame.quit()


# Game loop with asyncio
async def main():
    global selected_answer, current_question
    run = True
    while run:
        display_question()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
            elif event.type == pygame.MOUSEBUTTONDOWN:
                # Check if "Next" button is clicked
                if next_button.collidepoint(event.pos):
                    await check_answer()  # Make it async
                else:
                    # Check if an answer is clicked
                    for a, answer in enumerate(answers[current_question]):
                        answer_rect = pygame.Rect(50, 190 + a * 50, 700, 40)
                        if answer_rect.collidepoint(event.pos):
                            selected_answer = a
        await asyncio.sleep(0)  # Yield control back to the event loop

    pygame.quit()

# Start the game loop
asyncio.run(main())
