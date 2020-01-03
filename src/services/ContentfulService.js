import { createClient } from 'contentful';

export const client = createClient({
    // personal space
    // space: 'pzyvtdq9rd3m',
    // accessToken: 'KALCGtRrMBhwxFWoocht9nVHhkRBGR0xkbDcnT6OXIU'

    // bit space
    space: 'aq4puo31m564',
    accessToken: 'JEvRcauV8GVKsh3-VSW3Klc9WSnUKNzsvcfwRb6A9F4'
})

class ContentfulService {
    async getCard(cardID) {
        return client.getEntry(cardID).then(response => response.fields);
    }

    async getAllSteps(steps) {
        const slides = await Promise.all(steps.map(async (stepInfo, index) => {
            const stepID = stepInfo.sys.id;
            const slide = await this.getEachStep(stepID).then(step => ({
                heading: step.heading,
                content: step.content,
                image: step.image,
                snippet: step.snippet
            }))
            slide.isShown = (!index) ? true : false;
            return slide;
        }));

        return slides
    }

    async getConcept(conceptID) {
        return client.getEntry(conceptID)
            .then(response => {
                return this.getAllSteps(response.fields.steps).then(slides => slides);
            });
    }

    async getEachStep(stepID) {
        return client.getEntry(stepID).then(response => response.fields);
    }

    async getHint(hintID) {
        return client.getEntry(hintID)
            .then(response => {
                // console.log('res', response);
                return this.getAllSteps(response.fields.steps).then(steps => {
                    return {
                        title: response.fields.name,
                        // isLocked: response.fields.isLocked,
                        steps: steps
                    }
                });
            });
    }
}

export default ContentfulService;