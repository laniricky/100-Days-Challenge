def is_palindrome(s):
    return s == s[::-1]

if __name__ == "__main__":
    word = input("Enter a word to check: ")
    if is_palindrome(word):
        print(f"{word} is a palindrome!")
    else:
        print(f"{word} is not a palindrome.")



