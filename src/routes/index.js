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

router.post('/slack/interactions', (req, res) => {
  res.status(200).send('');

  const payload = JSON.parse(req.body.payload);

	if (payload.type === 'view_submission' && payload.view.callback_id === 'serenx') {
    const { values } = payload.view.state;
		console.log(values);
    // const feeling = values.wA1W;
    // const walk = values.walk.walk.value;
		// const hobbies = values.Ghb;
    // const digit = values.digit.digit.value;

    // console.log({
		// 	feelings,
		// 	walk,
		// 	hobbies,
		// 	digit
		// });
  }
});

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
			type: 'input',
			block_id: 'feeling',
			label: {
				type: 'plain_text',
				text: 'Welcome. How are you doing?'
			},
			element: {
				type: 'static_select',
				action_id: 'feeling',
				placeholder: {
					type: 'plain_text',
					text: 'Select an option'
				},
				options: [
					{
						text: {
							type: 'plain_text',
							text: 'Doing Well'
						},
						value: 'Doing Well'
					},
					{
						text: {
							type: 'plain_text',
							text: 'Neutral'
						},
						value: 'Neutral'
					},
					{
						text: {
							type: 'plain_text',
							text: 'Feeling Lucky'
						},
						value: 'Feeling Lucky'
					}
				]
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
		// {
		// 	type: 'input',
		// 	block_id: 'hobbies',
		// 	label: {
		// 		type: 'plain_text',
		// 		text: 'What are your favorite hobbies'
		// 	},
		// 	element: {
		// 		type: 'checkboxes',
		// 		action_id: 'hobbies',
		// 	},
		// 	options: [
		// 		{
		// 			text: {
		// 				type: 'plain_text',
		// 				text: 'Football'
		// 			},
		// 			value: 'Football'
		// 		},
		// 		{
		// 			text: {
		// 				type: 'plain_text',
		// 				text: 'Music'
		// 			},
		// 			value: 'Music'
		// 		},
		// 		{
		// 			text: {
		// 				type: 'plain_text',
		// 				text: 'Sleep'
		// 			},
		// 			value: 'Sleep'
		// 		},
		// 		{
		// 			text: {
		// 				type: 'plain_text',
		// 				text: 'Movies'
		// 			},
		// 			value: 'Movies'
		// 		},
		// 		{
		// 			text: {
		// 				type: 'plain_text',
		// 				text: 'Basketball'
		// 			},
		// 			value: 'Basketball'
		// 		}
		// 	],
		// },
		{
			type: 'input',
			block_id: 'hobbies',
			label: {
				type: 'plain_text',
				text: 'What are your favorite hobbies'
			},
			element: {
				type: 'multi_static_select',
				action_id: 'hobbies',
				placeholder: {
					type: 'plain_text',
					text: 'Select an option'
				},
				options: [
						{
						text: {
								type: 'plain_text',
								text: 'Football'
							},
							value: 'Football'
						},
						{
							text: {
								type: 'plain_text',
								text: 'Music'
							},
							value: 'Music'
						},
						{
							text: {
								type: 'plain_text',
								text: 'Sleep'
							},
							value: 'Sleep'
						},
						{
							text: {
								type: 'plain_text',
								text: 'Movies'
							},
							value: 'Movies'
						},
						{
							text: {
								type: 'plain_text',
								text: 'Basketball'
							},
							value: 'Basketball'
						}
				]
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
