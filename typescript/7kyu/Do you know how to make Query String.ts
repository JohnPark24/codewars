// Query string is a way to serialize object, which is used in HTTP requests. You may see it in URL:

// codewars.com/kata/search/?q=querystring
// The part q=querystring represents that parameter q has value querystring. Also sometimes querystring used in HTTP POST body:

// POST /api/users
// Content-Type: application/x-www-form-urlencoded

// username=warrior&kyu=1&age=28
// The string username=warrior&kyu=1&age=28 represents an entity (user in this example) with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

// {
//   "username": "warrior",
//   "kyu": 1,
//   "age": 28
// }
// Sometimes there are more than one value for property:

// {
//   "name": "shirt",
//   "colors": [ "white", "black" ]
// }
// Then it represents as repeated param:

// name=shirt&colors=white&colors=black
// So, your task is to write a function that convert an object to query string:

// to_query_string({ "bar": [ 2, 3 ], "foo": 1 }) # => "bar=2&bar=3&foo=1"

export const toQueryString = (obj: object): string => {
    return (Object.keys(obj) as Array<keyof typeof obj>).map(k => {
        if (Array.isArray(obj[k])) {
            return (obj[k] as any[]).map(x => `${k}=${x}`).join('&');
        } else {
            return `${k}=${obj[k]}`;
        }
    }).join('&');
};

export const toQueryString = (obj: object): string => 
    Object.entries(obj).reduce((prev, [key, value]) => prev + associate(key, value) + '&', '').slice(0, -1);

const associate = (key: string, value: any) =>  Array.isArray(value) ? 
    value.flatMap((x) => `${key}=${x}`).join('&') :
    `${key}=${value}`;



    
export function toQueryString(obj: object): string {
  return Object.keys(obj)
               .map(key => ({ key: key, value: obj[key] }))
               .map(pair => (pair.value instanceof Array) ? pair.value.map(x => ({ key: pair.key, value: x })) : [pair])
               .reduce((a, b) => a.concat(b), [])
               .map(pair => `${pair.key}=${pair.value}`)
               .join("&");
};