function challenge6(votes) {
    let a = 0, b = 0, c = 0;

    if (votes.length == 0) {
        return "There is not vote yet";
    }

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] == 'A') {
            a++;
        } else if (votes[i] == 'B') {
            b++;
        } else if (votes[i] == 'C') {
            c++;
        }
    }

    if (a > b && a > c) {
        return "A is the winner";
    } else if (b > a && b > c) {
        return "B is the winner";
    } else if (c > a && c > b) {
        return "C is the winner";
    } else if (a == b && a > c) {
        return "A and B are both winners";
    } else if (a == c && a > b) {
        return "A and C are both winners";
    } else if (b == c && b > a) {
        return "B and C are both winners";
    } else {
        return "A, B and C are all winners";
    }
}

console.log(challenge6(['A', 'B', 'A', 'C', 'A'])); 
console.log(challenge6(['A', 'B', 'B', 'C', 'A'])); 
console.log(challenge6([]));                        