export async function _get(url) {
    let res = await fetch(url);
    return res.json();
}


export async function _post(url, payload) {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}


