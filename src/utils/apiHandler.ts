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
        const request =  await fetch(url, params);
        return request.json() as T;
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        return err as T;
    }
};

export const httpGet = async <T>(url: string, token?: string): Promise<T> => {
    return await fetchRequest({ url, method: 'GET', token });
};

