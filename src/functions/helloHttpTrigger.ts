import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function helloHttpTrigger(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello from this world, ${name}!` };
};

app.http('helloHttpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'function',
    handler: helloHttpTrigger
});
