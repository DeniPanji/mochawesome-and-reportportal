import libraryFine from "./index.js";
import { assert } from 'chai';

describe('libraryFine - Positive', function() {
    it('LF_006 - should return 0 if d1 < d2, m1 =m2, y1 < y2', function() {
        assert.equal(libraryFine(6, 6, 2015, 9, 6, 2016), 0);
    });
    it('LF_007 - should return fine when d1 > d2', function() {
        assert.equal(libraryFine(30, 5, 2015, 2, 5, 2015), 420);
    });
    it('LF_008 - should return fine when d1 > d2 and m1 > m2 ', function() {
        assert.equal(libraryFine(2, 7, 1014, 1, 1, 1014), 3000)
    });
    it('LF_009 - should return 0 when d1 > d2 and m1 < m2', function() {
        assert.equal(libraryFine(28, 2, 2015, 15, 4, 2015), 0);
    });
    it('LF_010 - should return fine when d1 > d2, m1 > m2, and y1 > y2', function() {
        assert.equal(libraryFine(2, 7, 2015, 1, 2, 2014), 10000);
    });
});