export default    {
  path: "/tree",
  name: "Tree",
  sort:5,
  meta: {
    title: "拖拽",
    keepAlive: true,
    iocn: "icon-tree",
  },
  component: () => import("@/views/Tree/index.vue"),
}