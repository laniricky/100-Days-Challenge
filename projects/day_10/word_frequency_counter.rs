use std::collections::HashMap;
use std::fs;

fn main() {
    let filename = "sample.txt";
    let contents = fs::read_to_string(filename).expect("Something went wrong reading the file");

    let mut word_count = HashMap::new();

    for word in contents.split_whitespace() {
        let counter = word_count.entry(word).or_insert(0);
        *counter += 1;
    }

    for (word, count) in &word_count {
        println!("{}: {}", word, count);
    }
}

