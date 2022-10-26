export async function api(email, name, numero) {
    await fetch(`https://luanmarketplace.us12.list-manage.com/subscribe/post?u=aaadf42b1ae0ef12b69c2485d&amp;id=1be966fdae&amp;f_id=00d0b0e0f0&EMAIL=${email}&FNAME=${name}&PHONE=${numero}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset = utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
    })
}