/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 13.03.2019
 * Time: 23:16
 */
export default async (url, params) => {
    const {username, password} = params;
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: new Headers({'Content-Type': 'application/json'}),
    });

    const response = await fetch(request);

    if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
    }

    const json = await response.json();
    const {token} = json;

    localStorage.setItem('token', token);

    return true;
}
