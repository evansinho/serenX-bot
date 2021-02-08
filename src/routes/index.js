import express from 'express';
import dotenv from 'dotenv';
const { WebClient } = require('@slack/web-api');

const router = express.Router();

dotenv.config();
const token = process.env.SLACK_BOT_TOKEN;

// Initialize
const web = new WebClient(token, { retries: 0 });

router.post('/slack/serenx', async (req, res) => {
	const { trigger_id: triggerId } = req.body;

  res.status(200).send('');
  try {
		(async () => {
			await web.views.open({
				trigger_id: triggerId,
				view: messageJsonBlock,
			})
		})();
  } catch (e) {
    console.log(e);
  }
})

// router.post('/slack/interactions', (req, res) => {
//   res.status(200).send('');

//   const payload = JSON.parse(req.body.payload);

//   // view the payload on console
//   console.log(payload);
// });

const messageJsonBlock = 
{
	type: 'modal',
	title: {
		type: 'plain_text',
		text: 'SEREN-X',
	},
	submit: {
		type: 'plain_text',
		text: 'Submit',
	},
	callback_id: 'serenx',
	blocks: [
		{
			type: 'section',
			text: {
				type: 'plain_text',
				text: ':wave: We will get back to you as soon as possible',
				emoji: true,
			},
		},
		{
			type: 'divider',
		},
		{
			type: 'section',
			text: {
				type: 'mrkdwn',
				text: 'Welcome. How are you doing?'
			},
			accessory: {
				type: 'static_select',
				placeholder: {
					type: 'plain_text',
					text: 'Select an item',
					emoji: true
				},
				options: [
					{
						text: {
							type: 'plain_text',
							text: 'Doing Well',
							emoji: true
						},
						value: 'Doing Well'
					},
					{
						text: {
							type: 'plain_text',
							text: 'Neutral',
							emoji: true
						},
						value: 'Neutral'
					},
					{
						text: {
							type: 'plain_text',
							text: 'Feeling Lucky',
							emoji: true
						},
						value: 'Feeling Lucky'
					}
				],
				action_id: 'feelings'
			}
		},
		{
			type: 'input',
			block_id: 'walk',
			label: {
				type: 'plain_text',
				text: 'when are you free this week for a walk?',
				emoji: true,
			},
			element: {
				type: 'plain_text_input',
				multiline: false,
				action_id: 'walk',
				placeholder: {
					type: 'plain_text',
					text: 'Enter A Time slot',
					emoji: true
				},
			},
		},
		{
			type: 'section',
			text: {
				type: 'mrkdwn',
				text: 'What are your favorite hobbies'
			},
			accessory: {
				type: 'checkboxes',
				options: [
					{
						text: {
							type: 'mrkdwn',
							text: 'Football'
						},
						value: 'Football'
					},
					{
						text: {
							type: 'mrkdwn',
							text: 'Music'
						},
						value: 'Music'
					},
					{
						text: {
							type: 'mrkdwn',
							text: 'Sleep'
						},
						value: 'Sleep'
					},
					{
						text: {
							type: 'mrkdwn',
							text: 'Movies'
						},
						value: 'Movies'
					},
					{
						text: {
							type: 'mrkdwn',
							text: 'Basketball'
						},
						value: 'Basketball'
					}
				],
				action_id: 'hobbies'
			}
		},
		{
			type: 'input',
			block_id: 'digit',
			label: {
				type: 'plain_text',
				text: 'What are the first 3 digits on the number scale?',
				emoji: true,
			},
			element: {
				type: 'plain_text_input',
				multiline: false,
				action_id: 'digit',
				placeholder: {
					type: 'plain_text',
					text: 'Enter Number Scale',
					emoji: true
				},
			},
		},
	],
}

export default router;
