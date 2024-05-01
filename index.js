function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if (typeof d1 === "string" || typeof m1 === "string" || typeof y1 === "string" ||
        typeof d2 === "string" || typeof m2 === "string" || typeof y2 === "string") {
        throw new Error("Invalid input: Parameters cannot be strings");
    }
    
    let fine = 0;
        if(y1 === y2 && m1 === m2 && d1 > d2){
            fine = 15 * (d1 - d2);
            return fine;
        }else if(y1 === y2 && m1 > m2){
            fine = 500 * (m1 - m2);
            return fine;
        }else if(y1 > y2){
            fine = 10000;
            return fine;
        }else if (d1 <= d2 || m1 <= m2 || y1 <= y2){
            return 0;
        } else {
            throw new Error("out of range");
        }
}

export default libraryFine;