import { Request, Response } from 'express';

class TestController {
  async test(request: Request, response: Response) {
    console.log("Received request...");

    return response.json({
      timestamp: Number(new Date()),
      message: "Test is just fine!",
      data: "Some random text data..."
    });
  }
}

export { TestController };
