import libraryFine from "./index.js";
import { expect } from 'chai';


describe('libraryFine - Negative', function() {
    it('LF_001 - should return error for string input (day and year)', function() {
        function apalah () {
            libraryFine("1", 2, "2022", 1, 2, 2023);
        }
        expect(apalah).to.throw("Invalid input: Parameters cannot be strings");
    });

    it('LF_002 - should return error for string input (month and year)', function() {
        function apalah () {
            libraryFine(1, "2", "2022", 1, 2, 2023);
        }
        expect(apalah).to.throw("Invalid input: Parameters cannot be strings");
    });

    it('LF_003 - should return error for string input (all params)', () => {
        function apalah () {
            libraryFine("1", "2", "2022", "1", "2", "2023");
        }
        expect(apalah).to.throw("Invalid input: Parameters cannot be strings");
    });

    it('LF_004 - should return error for string input (year)', () => {
        function apalah () {
            libraryFine(1, 2, "2022", 1, 2, 2023);
        }
        expect(apalah).to.throw("Invalid input: Parameters cannot be strings");
    });
    

    it('LF_005 - should return error for string input (month)', () => {
        function apalah () {
            libraryFine(1, "2", 2022, 1, 2, 2023);
        }
        expect(apalah).to.throw("Invalid input: Parameters cannot be strings");
    });
});