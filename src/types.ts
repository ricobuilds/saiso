export interface APIProps {
    /**
     * The name of the product or business.
     */
    name: string
    /**
     * The URL link to a brand image to display to users.
     */
    logo: string
    /**
     * The URL to the Notion API being used
     */
    notionAPI: string
    /**
     * The ID for your Notion Database
     */
    notionDB: string
    /**
     * The ID for your Notion Database
     */
     notionKey: string
}

export interface DataProps {
    /**
     * The type of category: 'Features' • 'Ideas' • 'Issues' • 'Other'.
     */
    type: string
    /**
     * A user's satisfaction rate with your product.
     */
    satisfactionRate: string
    /**
     * A user's feedback input.
     */
    feedback: string
    /**
     * A user's contact email. May be 'n/a' if they don't enter anything.
     */
    email: string
    /**
     * The date the feedback was provided by the user.
     */
    date: string
}