import type { MetaFunction } from "react-router";

export namespace Route {
  export interface LoaderArgs {
    request: Request;
    params: {
      ideaId: string;
    };
  }

  export interface ActionArgs {
    request: Request;
    params: {
      ideaId: string;
    };
  }

  export interface LoaderData {
    idea: {
      id: string;
      title: string;
      description: string;
      longDescription: string;
      votes: number;
      author: {
        name: string;
        avatar: string;
      };
      createdAt: string;
      tags: string[];
      comments: Array<{
        id: string;
        author: {
          name: string;
          avatar: string;
        };
        content: string;
        createdAt: string;
        likes: number;
      }>;
    };
  }

  export interface ActionData {
    // 액션 데이터 타입 정의
  }

  export interface ComponentProps {
    loaderData: LoaderData;
    actionData?: ActionData;
  }

  export type MetaFunction = MetaFunction<typeof import("../pages/idea-page")>;
} 