function returnResponsesForAllVerbs(uri, predicates) {

  const verbArray = ['GET', 'POST', 'PUT', 'DELETE'];
  const responseArray = [];

  verbArray.forEach(function (verb) {
    let response = {
      'uri': uri,
      'verb': verb,
      'res': {
        'statusCode': 200,
        'responseHeaders': {
          'Content-Type': 'application/json'
        },
        'responseBody': JSON.stringify({
          [uri]: verb
        })
      }
    };
    if (predicates && predicates.length > 0) {
      response.predicates = predicates
    }

    responseArray.push(response);
  });
  return responseArray;
}

module.exports.returnResponsesForAllVerbs = returnResponsesForAllVerbs;
