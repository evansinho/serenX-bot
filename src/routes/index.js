import express from 'express';
import dotenv from 'dotenv';
const { WebClient } = require('@slack/web-api');

const router = express.Router();

dotenv.config();
const token = process.env.SLACK_BOT_TOKEN;

// Initialize
const web = new WebClient(token, { retries: 0 });

router.post('/slack/seren-x', async (res, req) => {
  try {
  const res = await web.chat.postMessage(messageJsonBlock)
  res.status(200).send('');
  console.log('Message sent: ', res.ts)
  } catch (e) {
    console.log(e);
  }
  
})

const messageJsonBlock = 
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Welcome. How are you doing?"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "*Doing Well*",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "*Neutral*",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "*Feeling Lucky*",
							"emoji": true
						},
						"value": "value-2"
					}
				],
				"action_id": "static_select-action"
			}
		},
				{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "when are you free this week for a walk?",
				"emoji": true
			},
			"fields": [
				{
					"type": "plain_text",
					"text": "*this is plain_text text*",
					"emoji": true
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "What are your favorite hobbies"
			},
			"accessory": {
				"type": "checkboxes",
				"options": [
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Football*"
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Music*"
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Sleep*"
						},
						"value": "value-2"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Movies*"
						},
						"value": "value-3"
					},
					{
						"text": {
							"type": "mrkdwn",
							"text": "*Basketball*"
						},
						"value": "value-4"
					}
				],
				"action_id": "checkboxes-action"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "What are the first 3 digits on the number scale?",
				"emoji": true
			},
			"fields": [
				{
					"type": "plain_text",
					"text": "*this is plain_text text*",
					"emoji": true
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "thank you",
				"emoji": true
			}
		}
	]
}

export default router;
