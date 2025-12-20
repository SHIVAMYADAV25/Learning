// Importing the React library to define a React functional component.
import React from 'react';

// Defining a functional component named `Article`.
const Article = async ({params} : any) => {
    const h1 = (await params).articleId
    // console.log(h1)
    return (
    <div>
      {/* Displaying a friendly message on the page */}
      Hiii from Article ke andar wala page {h1}
    </div>
  );
};

// Exporting the `Article` component as the default export of this module, 
// so it can be imported and used in other files.
export default Article;