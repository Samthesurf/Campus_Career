import { onRequestPost as __api_admin_login_js_onRequestPost } from "/workspace/functions/api/admin/login.js"
import { onRequestGet as __api_admin_verify_js_onRequestGet } from "/workspace/functions/api/admin/verify.js"
import { onRequestDelete as __api_registrations__id__js_onRequestDelete } from "/workspace/functions/api/registrations/[id].js"
import { onRequestPost as __api_register_js_onRequestPost } from "/workspace/functions/api/register.js"
import { onRequestGet as __api_registrations_js_onRequestGet } from "/workspace/functions/api/registrations.js"

export const routes = [
    {
      routePath: "/api/admin/login",
      mountPath: "/api/admin",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_login_js_onRequestPost],
    },
  {
      routePath: "/api/admin/verify",
      mountPath: "/api/admin",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_verify_js_onRequestGet],
    },
  {
      routePath: "/api/registrations/:id",
      mountPath: "/api/registrations",
      method: "DELETE",
      middlewares: [],
      modules: [__api_registrations__id__js_onRequestDelete],
    },
  {
      routePath: "/api/register",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_register_js_onRequestPost],
    },
  {
      routePath: "/api/registrations",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_registrations_js_onRequestGet],
    },
  ]