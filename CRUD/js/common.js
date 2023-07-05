function parseQueryString() {
    console.log(window.location.search); //?id=1

    if(window.location.search.length === 0) {
        return {};
    }

    else {
        const queryStringObject = {};
        const queryString = window.location.search.substring(1).split("&"); //?제거 및 &로 분리
        console.log(queryString);
        
        for(const s of queryString) {
            const q = s.split("=");
            queryStringObject[q[0]] = q[1];
        }

        console.log(queryStringObject);
        return queryStringObject;
    }
}