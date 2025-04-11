type RequestProps = {
    url: string;
    method: string;
    body?: object;
    token?: string;
}

const fetchRequest = async <T>({ url, method, body, token }: RequestProps): Promise<T> => {
    try {
        let params = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        if (method === 'POST' || method === 'PUT') {
            params = { ...params, ...body };
        }
        const response =  await fetch(url, params);
        return response.json() as T;
    } catch (err: unknown) {
        let response = '';
        if (err instanceof Error) {
            response = err.message;
        }
        return new Promise((resolve) => resolve(response as T));
    }
};

export const httpGet = async <T>(url: string, token?: string): Promise<T> => {
    return await fetchRequest({ url, method: 'GET', token });
};

