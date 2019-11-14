/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

let timesHelloed = 0;

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.get('/hello', (req, res) => {
  res
    .status(200)
    .send('Hello has been incrimented by 1')
    .end();
  timesHelloed ++;
});

app.get('/timesHelloed', (req, res) => {
  res
    .status(200)
    .send('This has been helloed ' + timesHelloed + ' times')
    .end();
});

app.get('/resetTimesHelloed', (req, res) => {
  res
    .status(200)
    .send('Hello has been reset')
    .end();
  timesHelloed = 0;
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
