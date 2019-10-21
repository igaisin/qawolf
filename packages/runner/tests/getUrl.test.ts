import { loginWorkflow } from "../../build-workflow/fixtures/loginWorkflow";
import { getUrl } from "../src/getUrl";

describe("getUrl", () => {
  it("uses test environment variable if it is defined", () => {
    process.env.QAW_LOGIN_URL = "http://QAW_LOGIN_URL";
    let url = getUrl(loginWorkflow);
    expect(url).toEqual("http://QAW_LOGIN_URL");
    delete process.env.QAW_LOGIN_URL;
    url = getUrl(loginWorkflow);
    expect(url).toEqual(loginWorkflow.url);
  });

  it("uses QAW_URL variable if it is defined", () => {
    process.env.QAW_URL = "http://QAW_URL";
    let url = getUrl(loginWorkflow);
    expect(url).toEqual("http://QAW_URL");

    // make sure it prioritizes the test url
    process.env.QAW_LOGIN_URL = "http://QAW_LOGIN_URL";
    url = getUrl(loginWorkflow);
    expect(url).toEqual("http://QAW_LOGIN_URL");

    delete process.env.QAW_URL;
    delete process.env.QAW_LOGIN_URL;
    url = getUrl(loginWorkflow);
    expect(url).toEqual(loginWorkflow.url);
  });
});
