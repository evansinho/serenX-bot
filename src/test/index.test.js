import app from '../index';
import {
  MockedWebClient,
  MockWebClient,
} from '@slack-wrench/jest-mock-web-client';

describe("Bot", () => {
 
  beforeEach(() => {
    // Reset mocks for each test
    MockedWebClient.mockClear();
    // In this example, bot creates a `new WebClient()`
    MockWebClient = WebClient.mock.instances[0];
  });

  it("should return a welcome message", async () => {
    await request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
