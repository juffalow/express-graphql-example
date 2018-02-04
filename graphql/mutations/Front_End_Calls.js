// READ ME !!!!
// ********************** FRONT END MUTATION CALLS ************************

// the id's would be querried on the front end componenet
// the hardcoded strings would be created from front end inputs
// so dont panic and make sure to change them to see results
// in the database


// ============ QUOTE MUTATIONS =========
// =============================
// creating a quote/adding it to author by author id
mutation {
 addQuoteToAuthor(id: 3, quote: "adding this quote") {
   id
 }
}
// =============================
// destroying quote by quote id
mutation {
	destroyQuoteFromAuthor(id: 14) {
    author {
      name
    }
  }
}
// =============================
// updating quote by quote id
mutation {
  updateQuote (id: 4, quote: "this is that new new") {
    id
  }
}


// ============ AUTHOR MUTATIONS ============
// =============================
// creating an author
mutation {
	createAuthor (
		name: "Dirtbag",
    last_name: "Steve"
  	) {
	  id
	}
}
// =============================
// updating an author based on id
mutation {
  updateAuthor (
    id: 2,
    name: "new",
    last_name: "newer") {
    	id
  }
}
// =============================
// destroys author from db by id
mutation {
  destroyAuthor(id: 2) {
    id
  }
}
