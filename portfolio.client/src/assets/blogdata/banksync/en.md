# Personal Finances in Order

## Looking for Structure

The motivation for this personal project came from a simple question: where does my money go, and am I managing my finances properly? To answer this, I needed data without having to manually track every expense. The system had to work with minimal friction and provide a detailed, clear overview of my income and expenses.

## Where the data comes from

Almost all of my income and expenses are digital nowadays, which means banks already have all the raw data. The main challenge is extracting transaction data from the relevant parties. Due to the sensitivity and commercial value of this data, banks are not eager to share it freely. Fortunately, PSD2 legislation requires banks to give third parties access to exactly this information. As a result, each financial institution provides its own API to retrieve data.
Connecting to these APIs directly is more difficult than expected, as not everyone can simply apply for these permissions. To gain access, I relied on several intermediaries. These parties have already implemented connections to the PSD2 endpoints of multiple banks and offer a consolidated solution. This allows you, as a user, to work with a single party while accessing data from multiple banks. This ultimately made it possible to retrieve all expenses in a standardized format. At this scale, the cost of these intermediaries is limited, although you do pay by sharing your own data.

## Classifying raw data

To gain meaningful insights from the raw data, all transactions need to be classified into categories. This can be done manually, but it requires a lot of effort. Initially, a self learning approach seemed like the right solution. For example, new transactions from Colruyt would automatically receive the same category as previous ones. This worked well for recurring transactions but fell short in more complex scenarios.
To address this, AI is used for classification. OpenAI makes it possible to train your own model based on existing models. I defined a structure in which each transaction is sent to the model, and the AI selects the appropriate category. As a result, expenses made in a supermarket in Spain are also classified correctly right away.

## Visualizing the data

Now that a large amount of data has been classified, the final step is visualization. For this, I created several Power BI reports that use slicers to aggregate data across specific time periods and categories. This approach allows me to view and analyze the most recent data at any time, without manual interaction.
