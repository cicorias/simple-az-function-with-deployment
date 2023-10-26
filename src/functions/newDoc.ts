import { app, InvocationContext } from "@azure/functions";

export async function newDoc(queueItem: unknown, context: InvocationContext): Promise<void> {
    context.log('Storage queue function processed work item:', queueItem);
}

app.storageQueue('newDoc', {
    queueName: 'js-queue-items',
    connection: 'queueStorage',
    handler: newDoc
});
