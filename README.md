# search-query-tester

Test object with search query syntax.

## Search query syntax

`search-query-tester` use following library:

- [polm/philtre: Search objects with a familiar syntax.](https://github.com/polm/philtre "polm/philtre: Search objects with a familiar syntax.")

## Install

Install with [npm](https://www.npmjs.com/):

    npm install search-query-tester

## Usage

### API

```ts
export declare class SearchQueryTester<T extends object> {
    /**
     * Return true if the `searchQuery` with the `data`.
     */
    test(searchQuery: string, data: T): boolean;
}

```

### Example

```ts
import { SearchQueryTester } from "search-query-tester";
const tester = new SearchQueryTester();
const data = {
    id: "idValue",
    title: "titleValue",
    author: "authorValue",
    body: "bodyValue"
};
// search all property by default
assert.ok(tester.test("idValue", data));
assert.ok(tester.test("titleValue", data));
assert.ok(tester.test("authorValue", data));
assert.ok(tester.test("bodyValue", data));
// "AND" operator
assert.ok(tester.test("idValue AND titleValue", data));
// "OR" operator
assert.ok(tester.test("idValue OR noMatchValue", data));
// "-" operator
assert.ok(tester.test("bodyValue -notMatchValue", data));
 ```

### Supported Keywords

Currently, It is same syntax with [Philtre](https://github.com/polm/philtre "Philtre").

Note that except for values before a colon in keywords using them (which must match the regex `[A-z]*`), anything may be quoted to preserve whitespace or otherwise special characters.

| keyword | effect |
| --- | --- |
| (default) | non-special words check for a string match on every field of the object. |
| `:has:[something]` | true if the object has a field named `something` |
| `:is:[something]` | same as `:has:` |
| `[key]:[value]` | true if `value` equals the `key` property |
| `AND` | does nothing (it's the default) |
| `OR` | logical OR of the conditions on either side |
| `NOT` | negates the next keyword |
| `-[something]` | negates the next keyword; unlike `not` doesn't need a space |
| `(` and `)` | allows grouping of terms |
| `#[xxx]` | true if the `.tags` property contains `xxx` |
| `:before:[xxx]` | true if the `.date` property is less than `xxx` |
| `:after:[xxx]` | true if the `.date` property is greater than `xxx` |
| `:sort:[field]` | sorts on `field` | 
| `:sortr:[field]` | sorts on `field` in the order opposite `:sort:` | 
| `:limit:[count]` | only shows up to `count` results | 


## Changelog

See [Releases page](https://github.com/azu/search-query-tester/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/search-query-tester/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
