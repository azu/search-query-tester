// MIT © 2017 azu
const philtre = require("philtre").philtre;

export class SearchQueryTester<T extends object> {
    /**
     * Return true if the `searchQuery` with the `data`.
     */
    test(searchQuery: string, data: T): boolean {
        const results = philtre(searchQuery, [data]);
        return results.length !== 0;
    }
}
