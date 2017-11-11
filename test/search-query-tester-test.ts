// MIT © 2017 azu
import { SearchQueryTester } from "../src/search-query-tester";
import * as assert from "assert";

describe("search-query-tester", () => {
    it("match all value by default", () => {
        const tester = new SearchQueryTester();
        const data = {
            id: "idValue",
            title: "titleValue",
            author: "authorValue",
            body: "bodyValue"
        };
        assert.ok(tester.test("idValue", data));
        assert.ok(tester.test("titleValue", data));
        assert.ok(tester.test("authorValue", data));
        assert.ok(tester.test("bodyValue", data));
    });
    it("AND", () => {
        const tester = new SearchQueryTester();
        const data = {
            id: "idValue",
            title: "titleValue",
            author: "authorValue",
            body: "bodyValue"
        };
        assert.ok(tester.test("idValue AND titleValue", data));
    });
    it("OR", () => {
        const tester = new SearchQueryTester();
        const data = {
            id: "idValue",
            title: "titleValue",
            author: "authorValue",
            body: "bodyValue"
        };
        assert.ok(tester.test("idValue OR noMatchValue", data));
    });
    it("-", () => {
        const tester = new SearchQueryTester();
        const data = {
            id: "idValue",
            title: "titleValue",
            author: "authorValue",
            body: "bodyValue"
        };
        assert.ok(tester.test("bodyValue -notMatchValue", data));
    });
    it(":property", () => {
        const tester = new SearchQueryTester();
        const data = {
            id: "idValue",
            title: "titleValue",
            author: "authorValue",
            body: "bodyValue"
        };
        assert.ok(tester.test("id:idValue", data));
    });
});
