/*
 Created by JLaw, riding on the coattails of Mia!
 Example Config can be seen in the top entry.
*/

return { result: [{
    "name": "MDL GF Rota", // The name of this rota
    "description": "The MDL greenflag rota, posts to #mdl-team", // A description of what this rota is for
    "owner": "Johnathan Law", // A person who can be contacted for issues
    "active": true, // When false, messages will be sent to #rotabot-inactive and when active they will be sent to the channel referenced by slack-channel
    "spreadsheet": "1XHDVi_VrUW0MX9emmpdqTsa78Xc6Qqpal24xidBXRb8", // The spreadsheet to look at, the value between 'spreadsheets/d/' and '/edit#gid='
    "sheet-id": "971719928", // The ID of the sheet to look at, the value after '/edit#gid=' - note that the first sheet on a spreadsheet is 0.
    "slack-channel": "C029XCPDNH0", // The Slack channel to send to, you must provide the channel ID and not the name!
    "message": "Hello! :wave: The Green Flag holder today is:\n`CDC:` <<2>>\n`Batch:` <<3>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1XHDVi_VrUW0MX9emmpdqTsa78Xc6Qqpal24xidBXRb8/edit#gid=0|here>.\n\nSee details about what the Green Flag means <https://docs.google.com/document/d/1GOGUruD6ijSHyXgZLyJSRMyuSf0NVY1ICzl9PxaU208/edit|here>." // The message to send, see https://help.zapier.com/hc/en-us/articles/8496025607181
},
{
    "name": "Integrations",
    "description": "The integrations rota, posts to #int-incidents-flex-squad",
    "owner": "Daren Roberts",
    "active": true,
    "spreadsheet": "1gAVbp4hsOpzCUhIIhe5IpbGMe-0IJrRNO78AvdCfKM0",
    "sheet-id": "971719928",
    "slack-channel": "C05UQFEDWAJ",
    "message": "Hello! :wave: The Green Flag holders who are on the Incident rota today are:\n\n`Modular:` <<3>>\n`QE:` <<4>>\n\nFor any Custom Connector Incidents, please reach out to the Green Flag Holder.\n\n`Custom Connector:` <<2>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1gAVbp4hsOpzCUhIIhe5IpbGMe-0IJrRNO78AvdCfKM0/edit#gid=0|here>."
},
{
    "name": "Custom Connector",
    "description": "The custom connectors rota, posts to #int-custom-connector-squad",
    "owner": "Daren Roberts",
    "active": true,
    "spreadsheet": "1gAVbp4hsOpzCUhIIhe5IpbGMe-0IJrRNO78AvdCfKM0",
    "sheet-id": "971719928",
    "slack-channel": "C04QXTUFP51",
    "message": "Hello! :wave: The Green Flag holder today is:\n\n`Custom Connector:` <<2>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1gAVbp4hsOpzCUhIIhe5IpbGMe-0IJrRNO78AvdCfKM0/edit#gid=0%7Chere>.\nSee details about what the Green Flag responsibilities are <https://matillion.atlassian.net/wiki/spaces/CON/pages/3767304311/Green+Flag+Holder|here>."
},
{
    "name": "Git",
    "description": "The Git rota, posts to #team-saas-etl-git",
    "owner": "Mia",
    "active": true,
    "spreadsheet": "1T0cOPUfKsW6aK5Pswarku_bdYr6m73F0lRkVnO_cDJs",
    "sheet-id": "971719928",
    "slack-channel": "C03KHEGB1S5",
    "message": "Good morning! :wave: The following are on rota this week:\n`Daily Scrum:` <<2>> - <<1>>\n`Green Flag:` <<3>>\n`Next Retro:` <<4>>\n\nFor any clashes between your <https://docs.google.com/spreadsheets/d/1Q2aBUo8IK5bh10qJEtwgDE3L42Ik4uK5JubX8XFNwrE/edit#gid=1102222716|planned holidays> and your rota days, please check with the team who can swap with you and update the rota <https://docs.google.com/spreadsheets/d/1T0cOPUfKsW6aK5Pswarku_bdYr6m73F0lRkVnO_cDJs/edit?usp=sharing|here>.\n"
},
{
    "name": "Project Explorer",
    "description": "The project explorer rota, posts to #team-dpc-etl-project-explorer",
    "owner": "Mia",
    "active": true,
    "spreadsheet": "1T0cOPUfKsW6aK5Pswarku_bdYr6m73F0lRkVnO_cDJs",
    "sheet-id": "971719928",
    "slack-channel": "C03K11K1XUM",
    "message": "Good morning! :wave: The following are on rota this week:\n`Daily Scrum:` <<5>> - <<1>>\n`Green Flag:` <<6>>\n`Next Retro:` <<7>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1T0cOPUfKsW6aK5Pswarku_bdYr6m73F0lRkVnO_cDJs/edit?usp=sharing|here>. "
},
{
    "name": "Designer",
    "description": "The designer rota, posts to #dpc-designer-team-engagement",
    "owner": "Abhi",
    "active": true,
    "spreadsheet": "1I4BChT0QA6ySq9QSrgXFQZMbd4EQhyE7Mi1JW1uVyYE",
    "sheet-id": "971719928",
    "slack-channel": "C052MEK7WAX",
    "message": "Good morning! :wave: The following person is on rota today:\n`Engagement:` <<1>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1I4BChT0QA6ySq9QSrgXFQZMbd4EQhyE7Mi1JW1uVyYE/edit?usp=sharing|here>. "
}]};
