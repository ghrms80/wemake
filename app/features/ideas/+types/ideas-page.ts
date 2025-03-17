import type { MetaFunction } from "react-router";

export namespace Route {
  export interface LoaderArgs {
    request: Request;
    params: {};
  }

  export interface ActionArgs {
    request: Request;
    params: {};
  }

  export interface LoaderData {
    ideas: Array<{
      id: string;
      title: string;
      description: string;
      votes: number;
      author: string;
      createdAt: string;
    }>;
  }

  export interface ActionData {
    // 액션 데이터 타입 정의
  }

  export interface ComponentProps {
    loaderData: LoaderData;
    actionData?: ActionData;
  }

  export type MetaFunction = MetaFunction<typeof import("../pages/ideas-page")>;
} 