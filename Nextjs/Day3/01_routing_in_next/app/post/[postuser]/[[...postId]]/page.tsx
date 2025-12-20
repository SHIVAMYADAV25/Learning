import { json } from "stream/consumers";

// Importing the default export from the function `Page` and defining its props type as `any`.
export default async function Page({ params }: any) {
    // This function component takes `params` as a prop, which can contain various dynamic parameters.
    let h1 = (await params).postuser;
    let h2 = (await params).postId;
    
    return (
        <div>
            {/* Rendering a friendly message on the page */}
            Heyy there from post wale page! 
            <br />
            {/* Displaying the `postId` parameter as a stringified JSON within an h1 element */}
            <h1>{h1}</h1>
            <h1>{h2}</h1>
        </div>
    );
}

// url => http://localhost:3000/post/shivam/1212
// postuser => shivam
// postId => 1212

/*
Notes :
- The `[...postId]` syntax is used in the dynamic routing of Next.js. 
- This allows handling routes like `localhost:3000/post/____` where anything after `/post/` 
  (e.g., 1/2, 2/3, 3/4, 4/5, rohan) will be captured and handled dynamically.
- The captured values are available as `params.postId` in the component. 
- This is particularly useful for creating pages that accept multiple levels of dynamic paths.
*/

/*

the [[...postId]] help use to render the previous folder also 
eg => when we type post and enter ther is an error
and when we enter /shivam it render the page.tsx which is inside the [[...postId]]


so inshort th previous folder can render using the next [[...postId]] double square brackeys
*/