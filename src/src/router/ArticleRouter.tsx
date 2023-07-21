import ArticleEdit from "@/page/article/edit";
import ArticleList from "@/page/article/list";

export const ArticleRouter =
    [
        {
            path: "/article",
            children: [
                {index: true, element: <ArticleList/>},
                {path: 'edit', element: <ArticleEdit/>},
            ]
        },
    ];
