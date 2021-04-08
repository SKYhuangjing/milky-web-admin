module.exports = {
    "data": {
        "swagger": "2.0",
        "info": {
            "title": "Vendor API"
        },
        "host": "107.151.187.186:8000",
        "basePath": "/vendor",
        "tags": [
            {
                "name": "Budget Approve Config",
                "description": "预算单元审批配置"
            },
            {
                "name": "Cache Control",
                "description": "提供缓存管理API"
            },
            {
                "name": "DeploymentDefine",
                "description": "采购交付-工单配置-管理API"
            },
            {
                "name": "ES Config",
                "description": "ES接口"
            },
            {
                "name": "OSS2.0 Work Order",
                "description": "oss2.0 工单模块"
            },
            {
                "name": "Purchase Dic Config",
                "description": "采购业务字典配置"
            },
            {
                "name": "PurchaseDelivery",
                "description": "采购交付"
            },
            {
                "name": "PurchaseFieldValue",
                "description": "提供采购字段数据管理API"
            },
            {
                "name": "PurchaseJoin",
                "description": "采购请求报价交接接口"
            },
            {
                "name": "PurchaseQuote",
                "description": "采购报价"
            },
            {
                "name": "PurchaseRequest",
                "description": "采购请求相关接口"
            },
            {
                "name": "PurchaseTemplate",
                "description": "提供采购模板管理API"
            },
            {
                "name": "PurchaseTemplateField",
                "description": "提供采购模板字段管理API"
            },
            {
                "name": "Sku",
                "description": "提供Sku管理API"
            },
            {
                "name": "SkuCategory",
                "description": "提供Sku类目管理API"
            },
            {
                "name": "Upload Config",
                "description": "上传配置"
            },
            {
                "name": "Vendor Management",
                "description": "供应商管理配置"
            },
            {
                "name": "error-controller",
                "description": "Error Controller"
            },
            {
                "name": "instance",
                "description": "流程相关接口"
            },
            {
                "name": "operation-handler",
                "description": "Operation Handler"
            },
            {
                "name": "web-mvc-links-handler",
                "description": "Web Mvc Links Handler"
            }
        ],
        "paths": {
            "/actuator": {
                "get": {
                    "tags": [
                        "web-mvc-links-handler"
                    ],
                    "summary": "links",
                    "operationId": "linksUsingGET",
                    "produces": [
                        "application/json",
                        "application/vnd.spring-boot.actuator.v2+json"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "object",
                                    "additionalProperties": {
                                        "$ref": "#/definitions/Link"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/actuator/health": {
                "get": {
                    "tags": [
                        "operation-handler"
                    ],
                    "summary": "handle",
                    "operationId": "handleUsingGET_2",
                    "produces": [
                        "application/json",
                        "application/vnd.spring-boot.actuator.v2+json"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "body",
                            "required": false,
                            "schema": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "object"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/actuator/health/{component}": {
                "get": {
                    "tags": [
                        "operation-handler"
                    ],
                    "summary": "handle",
                    "operationId": "handleUsingGET_1",
                    "produces": [
                        "application/json",
                        "application/vnd.spring-boot.actuator.v2+json"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "body",
                            "required": false,
                            "schema": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "object"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/actuator/health/{component}/{instance}": {
                "get": {
                    "tags": [
                        "operation-handler"
                    ],
                    "summary": "handle",
                    "operationId": "handleUsingGET",
                    "produces": [
                        "application/json",
                        "application/vnd.spring-boot.actuator.v2+json"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "body",
                            "required": false,
                            "schema": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "object"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/actuator/info": {
                "get": {
                    "tags": [
                        "operation-handler"
                    ],
                    "summary": "handle",
                    "operationId": "handleUsingGET_3",
                    "produces": [
                        "application/json",
                        "application/vnd.spring-boot.actuator.v2+json"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "body",
                            "required": false,
                            "schema": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "object"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/admin/cache": {
                "get": {
                    "tags": [
                        "Cache Control"
                    ],
                    "summary": "获取缓存",
                    "operationId": "list",
                    "produces": [
                        "*/*"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«Collection«string»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/admin/cache/{cacheName}": {
                "get": {
                    "tags": [
                        "Cache Control"
                    ],
                    "summary": "获取缓存",
                    "operationId": "get",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "cacheName",
                            "in": "path",
                            "description": "cacheName",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«Cache»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "Cache Control"
                    ],
                    "summary": "清除所有缓存",
                    "operationId": "clear",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "cacheName",
                            "in": "path",
                            "description": "cacheName",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/admin/cache/{cacheName}/{id}": {
                "delete": {
                    "tags": [
                        "Cache Control"
                    ],
                    "summary": "清除单个缓存",
                    "operationId": "evict",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "cacheName",
                            "in": "path",
                            "description": "cacheName",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "object"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/budgetUnit/user/{uid}/budgetId": {
                "get": {
                    "tags": [
                        "Budget Approve Config"
                    ],
                    "summary": "查看用户的预算单元集合",
                    "operationId": "listBudgetIdByUserUid",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "uid",
                            "in": "path",
                            "description": "uid",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«int»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/budgetUnit/{id}/user": {
                "get": {
                    "tags": [
                        "Budget Approve Config"
                    ],
                    "summary": "查看审批用户",
                    "operationId": "users",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«IUser»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "Budget Approve Config"
                    ],
                    "summary": "分配审批用户",
                    "operationId": "assignUser",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "budgetAssignUserRequest",
                            "description": "预算单元分配用户请求",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/BudgetAssignUserRequest"
                            }
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/deploymentDefine": {
                "get": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "查看列表",
                    "operationId": "select",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "sky"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«采购交付-工单配置»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "创建数据",
                    "operationId": "create",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "data",
                            "description": "data",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/采购交付-工单配置"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«采购交付-工单配置»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/deploymentDefine/define2skus/{defineId}": {
                "get": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "根据 流程编号 获取 一组Sku编号(流程可以关联多个SKU)",
                    "operationId": "translate_1",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "defineId",
                            "in": "path",
                            "description": "defineId",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«Sku»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/deploymentDefine/defineSkuDetail": {
                "put": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "新增 Sku编号 与 流程编号 关系",
                    "operationId": "mapping.insert",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "data",
                            "description": "data",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/采购交付-工单配置-关联SKU"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«采购交付-工单配置-SKU»»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "删除 Sku编号 与 流程编号 关系",
                    "operationId": "mapping.delete",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "data",
                            "description": "data",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/采购交付-工单配置-关联SKU"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«采购交付-工单配置-SKU»»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/deploymentDefine/sku2define/{skuId}": {
                "get": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "根据 Sku编号 获取 一个流程编号(SKU只能关联一个流程)",
                    "operationId": "translate",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "skuId",
                            "in": "path",
                            "description": "skuId",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«int»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/deploymentDefine/{id}": {
                "put": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "更新数据",
                    "operationId": "update",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "data",
                            "description": "data",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/采购交付-工单配置"
                            }
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«采购交付-工单配置»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "DeploymentDefine"
                    ],
                    "summary": "删除数据",
                    "operationId": "delete",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/error": {
                "get": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingGET",
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "head": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingHEAD",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingPOST",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "put": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingPUT",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingDELETE",
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                },
                "options": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingOPTIONS",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                },
                "patch": {
                    "tags": [
                        "error-controller"
                    ],
                    "summary": "errorHtml",
                    "operationId": "errorHtmlUsingPATCH",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "text/html"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ModelAndView"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/esSync/syncPoData/{orderNo}": {
                "post": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "同步PO数据, 参数是 Order No 列表",
                    "operationId": "syncPoDataUsingPOST",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "orderNo",
                            "in": "path",
                            "description": "orderNo",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/esSync/syncQuoteData": {
                "post": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "同步一个时间段的报价订单到ES",
                    "operationId": "syncQuoteDataUsingPOST",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "quoteSyncRequest",
                            "description": "quoteSyncRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/采购报价订单同步"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/file": {
                "put": {
                    "tags": [
                        "Upload Config"
                    ],
                    "summary": "设置文件上传权限",
                    "operationId": "setFileAccessControl",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "accessControl",
                            "in": "query",
                            "description": "accessControl",
                            "required": true,
                            "type": "string",
                            "enum": [
                                "DEFAULT",
                                "PRIVATE",
                                "PUBLIC_READ",
                                "PUBLIC_READ_WRITE"
                            ]
                        },
                        {
                            "name": "filePath",
                            "in": "query",
                            "description": "filePath",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/file/uploadConfig/{dir}": {
                "get": {
                    "tags": [
                        "Upload Config"
                    ],
                    "summary": "获取上传配置",
                    "operationId": "uploadConfig",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "dir",
                            "in": "path",
                            "description": "dir",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "expireSecond",
                            "in": "query",
                            "description": "expireSecond",
                            "required": false,
                            "type": "integer",
                            "default": 300,
                            "format": "int64"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«UploadConfigObj»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/instance/completeTask": {
                "post": {
                    "tags": [
                        "instance"
                    ],
                    "summary": "完成任务",
                    "operationId": "completeTask",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "instanceBizRequest",
                            "description": "instanceBizRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/InstanceBizRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«InstanceBizResponse»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/instance/rollBack": {
                "post": {
                    "tags": [
                        "instance"
                    ],
                    "summary": "流程回滚",
                    "operationId": "rollBack",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "instanceBizRequest",
                            "description": "instanceBizRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/InstanceBizRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/oss/v2/workOrder": {
                "get": {
                    "tags": [
                        "OSS2.0 Work Order"
                    ],
                    "summary": "获取工单列表数据",
                    "description": "list",
                    "operationId": "listSimpleWoInfoUsingGET",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: id/title/code",
                            "required": false,
                            "type": "string",
                            "x-example": "W10000"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "工单状态",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«InstanceBO»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseDelivery/updatePurchaseDeliveryOrderDetail": {
                "put": {
                    "tags": [
                        "PurchaseDelivery"
                    ],
                    "summary": "保存交付订单明细信息",
                    "operationId": "updatePurchaseDeliveryOrderDetail",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "saveRequest",
                            "description": "saveRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseDeliveryOrderDetailBatchSaveRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«PurchaseDeliveryOrderDetailDO»»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseDelivery/{instanceCodes}/savePurchaseDeliveryResource": {
                "put": {
                    "tags": [
                        "PurchaseDelivery"
                    ],
                    "summary": "保存PW工单涉及的资源",
                    "operationId": "savePurchaseDeliveryResource",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "lineType",
                            "description": "线路类型",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "instanceCodes",
                            "in": "path",
                            "description": "instanceCodes",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«Map«string,BaseDeliveryLineResult»»»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseDelivery/{instanceCode}/getPurchaseDeliveryPrivateLineSAN": {
                "get": {
                    "tags": [
                        "PurchaseDelivery"
                    ],
                    "summary": "获取PW专线工单SAN",
                    "operationId": "getPurchaseDeliveryPrivateLineSAN",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«BasePurchaseDeliverySan»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseDelivery/{instanceCode}/listPurchaseDeliveryOrderWithStatistics": {
                "get": {
                    "tags": [
                        "PurchaseDelivery"
                    ],
                    "summary": "获取采购交付订单",
                    "operationId": "listPurchaseDeliveryOrderWithStatistics",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseDeliveryOrderWithStatistics»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseDelivery/{instanceCode}/sendPurchaseDeliveryPrivateLineSAN": {
                "put": {
                    "tags": [
                        "PurchaseDelivery"
                    ],
                    "summary": "发送PW专线工单SAN",
                    "operationId": "sendPurchaseDeliveryPrivateLineSAN",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«Map«string,BasePurchaseDeliverySanResult»»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseDic": {
                "get": {
                    "tags": [
                        "Purchase Dic Config"
                    ],
                    "summary": "查看采购业务字典列表",
                    "operationId": "page",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "parentCode",
                            "in": "query",
                            "description": "父级标识",
                            "required": false,
                            "type": "string",
                            "x-example": "TEMPLATE_FIELD_BUSINESS_KEY"
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: name/code",
                            "required": false,
                            "type": "string",
                            "x-example": "NRC"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«PurchaseDic»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseFieldValue": {
                "get": {
                    "tags": [
                        "PurchaseFieldValue"
                    ],
                    "summary": "查看采购数据",
                    "operationId": "list_1",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "fieldUid",
                            "in": "query",
                            "description": "字段UID",
                            "required": false,
                            "type": "string",
                            "x-example": "1"
                        },
                        {
                            "name": "purchaseId",
                            "in": "query",
                            "description": "采购ID",
                            "required": true,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "purchaseModel",
                            "in": "query",
                            "description": "采购主体",
                            "required": true,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«PurchaseFieldValue»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "PurchaseFieldValue"
                    ],
                    "summary": "保存采购数据",
                    "operationId": "save",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "saveRequest",
                            "description": "saveRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseFieldValueSaveRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseFieldValue/json": {
                "get": {
                    "tags": [
                        "PurchaseFieldValue"
                    ],
                    "summary": "查看采购数据 JSON 形式",
                    "operationId": "json",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "fieldUid",
                            "in": "query",
                            "description": "字段UID",
                            "required": false,
                            "type": "string",
                            "x-example": "1"
                        },
                        {
                            "name": "purchaseId",
                            "in": "query",
                            "description": "采购ID",
                            "required": true,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "purchaseModel",
                            "in": "query",
                            "description": "采购主体",
                            "required": true,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«JSONObject»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseJoin/quoteToDelivery": {
                "post": {
                    "tags": [
                        "PurchaseJoin"
                    ],
                    "summary": "采购报价订单转交付订单",
                    "operationId": "quoteToDelivery",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "quoteToDeliveryRequest",
                            "description": "quoteToDeliveryRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseQuoteToDeliveryRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«PurchaseDeliveryOrderDO»»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseJoin/requestToQuote": {
                "post": {
                    "tags": [
                        "PurchaseJoin"
                    ],
                    "summary": "采购请求订单转报价订单",
                    "operationId": "requestToQuote",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "requestToQuoteRequest",
                            "description": "requestToQuoteRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseRequestToQuoteRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseQuoteOrderDO»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/cancelPurchaseQuote": {
                "put": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "取消采购报价",
                    "operationId": "cancelPurchaseQuote",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "cancelRequest",
                            "description": "cancelRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseQuoteCancelRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/listPurchaseQuote": {
                "get": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "获取采购报价列表",
                    "operationId": "listPurchaseQuote",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "beginStartQuoteTime",
                            "in": "query",
                            "description": "开始报价时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time"
                        },
                        {
                            "name": "coordinator",
                            "in": "query",
                            "description": "协调员",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "coordinatorUid",
                            "in": "query",
                            "description": "协调员UID",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "currentStep",
                            "in": "query",
                            "description": "当前步骤",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "endStartQuoteTime",
                            "in": "query",
                            "description": "结束报价时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time"
                        },
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: orderNo/relatedInstanceCode/prId/purpose",
                            "required": false,
                            "type": "string",
                            "x-example": "PO00000001"
                        },
                        {
                            "name": "skuCode",
                            "in": "query",
                            "description": "sku代码",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "statusName",
                            "in": "query",
                            "description": "状态名称",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "vendorName",
                            "in": "query",
                            "description": "供应商名称",
                            "required": false,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«PurchaseQuoteSearchModel»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/removePurchaseQuote": {
                "put": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "移除报价，恢复到待转PO",
                    "operationId": "removePurchaseQuote",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "removeRequest",
                            "description": "removeRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseQuoteRemoveRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/savePurchaseQuote": {
                "post": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "保存采购报价",
                    "operationId": "savePurchaseQuote",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "quoteSaveRequest",
                            "description": "quoteSaveRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseQuoteSaveRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/splitPurchaseQuote": {
                "put": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "拆分采购报价",
                    "operationId": "splitPurchaseQuote",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "quoteSplitRequest",
                            "description": "quoteSplitRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseQuoteSplitRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/terminateQuote": {
                "put": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "终止报价",
                    "operationId": "terminateQuote",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/updatePurchaseCoordinator": {
                "put": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "更新采购协调员",
                    "operationId": "updatePurchaseCoordinator",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "coordinatorUpdateRequest",
                            "description": "coordinatorUpdateRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseCoordinatorUpdateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/updateQuoteRemark": {
                "put": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "更新报价备注",
                    "operationId": "updateQuoteRemark",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "remarkUpdateRequest",
                            "description": "remarkUpdateRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/采购报价备注更新请求"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseQuote/{instanceCode}/listPurchaseQuoteOrderDetailWithStatistics": {
                "get": {
                    "tags": [
                        "PurchaseQuote"
                    ],
                    "summary": "获取采购报价订单明细",
                    "operationId": "listPurchaseQuoteOrderDetailWithStatistics",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseQuoteOrderDetailWithStatistics»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/addPurchaseRequestOrder": {
                "post": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "创建采购请求订单",
                    "operationId": "addPurchaseRequestOrder",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "description": "流程编码",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "in": "body",
                            "name": "orderCreateRequest",
                            "description": "orderCreateRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseRequestOrderCreateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«string»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/addPurchaseRequestOrderDetail": {
                "post": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "添加采购请求订单明细",
                    "operationId": "addPurchaseRequestOrderDetail",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "requestOrderDetailCreateRequests",
                            "description": "requestOrderDetailCreateRequests",
                            "required": true,
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/PurchaseRequestOrderDetailCreateRequest"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/cancelPurchaseRequestOrderDetail": {
                "put": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "取消采购申请",
                    "operationId": "cancelPurchaseRequestOrderDetail",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "cancelPurchaseRequestOrderDetailRequest",
                            "description": "cancelPurchaseRequestOrderDetailRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/CancelPurchaseRequestOrderDetailRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/deletePurchaseRequestOrder": {
                "delete": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "删除已经发起但没有建立明细的请求订单",
                    "operationId": "deletePurchaseRequestOrder",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "orderNos",
                            "in": "query",
                            "description": "采购请求订单号",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/deletePurchaseRequestOrderDetail": {
                "delete": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "删除采购请求订单明细",
                    "operationId": "deletePurchaseRequestOrderDetail",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "detailIds",
                            "in": "query",
                            "description": "明细主键",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/listPurchaseRequest": {
                "get": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "获取采购请求列表",
                    "operationId": "listPurchaseRequest",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "beginExpectedTime",
                            "in": "query",
                            "description": "开始时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time",
                            "x-example": "2019-12-12 08:19:26"
                        },
                        {
                            "name": "budgetUnitName",
                            "in": "query",
                            "description": "预算单元",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "currentStep",
                            "in": "query",
                            "description": "当前步骤",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "dataCenter",
                            "in": "query",
                            "description": "数据中心名称",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "endExpectedTime",
                            "in": "query",
                            "description": "结束时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time",
                            "x-example": "2019-12-12 08:19:26"
                        },
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "initiator",
                            "in": "query",
                            "description": "发起人",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "purchaseCoordinator",
                            "in": "query",
                            "description": "采购协调员",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "purchaseType",
                            "in": "query",
                            "description": "采购类型",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: prId/skuCode/skuDescriptionZh/skuDescriptionEn/purpose/purchaseCoordinator/purchaseCoordinator/initiator/requestSearchModels.quoteOrderNo",
                            "required": false,
                            "type": "string",
                            "x-example": "W10000"
                        },
                        {
                            "name": "skuCode",
                            "in": "query",
                            "description": "sku名称",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态",
                            "required": false,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«PurchaseRequestSearchModel»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/updateCoordinator": {
                "put": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "更新采购协调员",
                    "operationId": "updateCoordinator",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "coordinatorUpdaterRequest",
                            "description": "coordinatorUpdaterRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseRequestCoordinatorUpdateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/updatePurchaseRequestOrderDetail": {
                "put": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "更新采购请求订单明细",
                    "operationId": "updatePurchaseRequestOrderDetail",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "orderDetailUpdateRequests",
                            "description": "orderDetailUpdateRequests",
                            "required": true,
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/PurchaseRequestOrderDetailUpdateRequest"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/{instanceCode}/getPurchaseRequestOrder": {
                "get": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "获取流程编码对应采购请求订单",
                    "operationId": "getPurchaseRequestOrder",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseRequestOrder»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/{instanceCode}/listPurchaseRequestOrderDetail": {
                "get": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "获取指定流程码的采购请求订单明细",
                    "operationId": "listPurchaseRequestOrderDetail",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«PurchaseRequestOrderDetail»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/{instanceCode}/listPurchaseRequestOrderDetailWithStatistics": {
                "get": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "获取指定流程码的带统计的采购请求订单明细",
                    "operationId": "listPurchaseRequestOrderDetailWithStatistics",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseRequestOrderDetailWithStatistics»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseRequest/{instanceCode}/listPurchaseRequestOrderDetailWithStatistics4MailInfo": {
                "get": {
                    "tags": [
                        "PurchaseRequest"
                    ],
                    "summary": "获取指定流程码的采购请求订单明细(用于邮件)",
                    "operationId": "listPurchaseRequestOrderDetailWithStatistics4MailInfo",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "instanceCode",
                            "in": "path",
                            "description": "instanceCode",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseRequestOrderMailResponse»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseTemplate": {
                "get": {
                    "tags": [
                        "PurchaseTemplate"
                    ],
                    "summary": "查看采购模板列表",
                    "operationId": "page_1",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: name",
                            "required": false,
                            "type": "string",
                            "x-example": "IPT 模板"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "type",
                            "in": "query",
                            "description": "模型类型",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«PurchaseTemplate»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "PurchaseTemplate"
                    ],
                    "summary": "创建采购模板",
                    "operationId": "save_1",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "purchaseTemplateCreateRequest",
                            "description": "采购模板创建表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseTemplateCreateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseTemplate»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseTemplate/{id}": {
                "get": {
                    "tags": [
                        "PurchaseTemplate"
                    ],
                    "summary": "查看采购模板",
                    "operationId": "get_1",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseTemplate»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "put": {
                    "tags": [
                        "PurchaseTemplate"
                    ],
                    "summary": "更新采购模板",
                    "operationId": "update_1",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "purchaseTemplateUpdateRequest",
                            "description": "采购模板更新表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseTemplateUpdateRequest"
                            }
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseTemplate»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "PurchaseTemplate"
                    ],
                    "summary": "删除采购模板",
                    "operationId": "delete_1",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseTemplate/{id}/json": {
                "get": {
                    "tags": [
                        "PurchaseTemplate"
                    ],
                    "summary": "查看采购模板UI JSON",
                    "operationId": "getConfigJson",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseTemplateJsonResponse»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseTemplateField": {
                "get": {
                    "tags": [
                        "PurchaseTemplateField"
                    ],
                    "summary": "查看采购模板字段列表",
                    "operationId": "page_2",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: name/en/zh",
                            "required": false,
                            "type": "string",
                            "x-example": "device"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "templateId",
                            "in": "query",
                            "description": "模板ID",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«PurchaseTemplateField»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "PurchaseTemplateField"
                    ],
                    "summary": "创建采购模板字段",
                    "operationId": "save_2",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "purchaseTemplateFieldCreateRequest",
                            "description": "采购模板字段创建表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseTemplateFieldCreateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseTemplateField»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseTemplateField/batch": {
                "post": {
                    "tags": [
                        "PurchaseTemplateField"
                    ],
                    "summary": "批量采购模板字段",
                    "operationId": "batchUpdate",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "purchaseTemplateFieldCreateRequests",
                            "description": "采购模板字段批量更新表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseTemplateFieldBatchUpdateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/purchaseTemplateField/{id}": {
                "put": {
                    "tags": [
                        "PurchaseTemplateField"
                    ],
                    "summary": "更新采购模板字段",
                    "operationId": "update_2",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "PurchaseTemplateFieldUpdateRequest",
                            "description": "采购模板字段更新表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseTemplateFieldUpdateRequest"
                            }
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        },
                        {
                            "in": "body",
                            "name": "purchaseTemplateFieldUpdateRequest",
                            "description": "purchaseTemplateFieldUpdateRequest",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseTemplateFieldUpdateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PurchaseTemplateField»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "PurchaseTemplateField"
                    ],
                    "summary": "删除采购模板字段",
                    "operationId": "delete_2",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/search": {
                "post": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "新增",
                    "operationId": "saveUsingPOST",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "requestSearchModel",
                            "description": "requestSearchModel",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/PurchaseRequestSearchModel"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/PurchaseRequestSearchModel"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/search/po": {
                "delete": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "清空PO  ES数据",
                    "operationId": "makeQuoteEmptyUsingDELETE",
                    "produces": [
                        "*/*"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/search/pr": {
                "get": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "查询",
                    "operationId": "getUsingGET",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "beginExpectedTime",
                            "in": "query",
                            "description": "开始时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time",
                            "x-example": "2019-12-12 08:19:26"
                        },
                        {
                            "name": "budgetUnitName",
                            "in": "query",
                            "description": "预算单元",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "currentStep",
                            "in": "query",
                            "description": "当前步骤",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "dataCenter",
                            "in": "query",
                            "description": "数据中心名称",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "endExpectedTime",
                            "in": "query",
                            "description": "结束时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time",
                            "x-example": "2019-12-12 08:19:26"
                        },
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "initiator",
                            "in": "query",
                            "description": "发起人",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "purchaseCoordinator",
                            "in": "query",
                            "description": "采购协调员",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "purchaseType",
                            "in": "query",
                            "description": "采购类型",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: prId/skuCode/skuDescriptionZh/skuDescriptionEn/purpose/purchaseCoordinator/purchaseCoordinator/initiator/requestSearchModels.quoteOrderNo",
                            "required": false,
                            "type": "string",
                            "x-example": "W10000"
                        },
                        {
                            "name": "skuCode",
                            "in": "query",
                            "description": "sku名称",
                            "required": false,
                            "type": "string"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态",
                            "required": false,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«PurchaseRequestSearchModel»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "删除ES中采购请求 所有数据",
                    "operationId": "deleteAllUsingDELETE",
                    "produces": [
                        "*/*"
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/search/pr/{beginPrId}/{endPrId}": {
                "post": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "同步PR数据, 参数是 purchase detail id 列表",
                    "operationId": "syncPrDataUsingPOST",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "beginPrId",
                            "in": "path",
                            "description": "beginPrId",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        },
                        {
                            "name": "endPrId",
                            "in": "path",
                            "description": "endPrId",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/search/pr/{id}": {
                "delete": {
                    "tags": [
                        "ES Config"
                    ],
                    "summary": "根据id删除",
                    "operationId": "deleteUsingDELETE",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "type": "boolean"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/sku": {
                "get": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "查看SKU列表",
                    "operationId": "page_4",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "categoryId",
                            "in": "query",
                            "description": "SKU 类目",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: en/zh/code/descriptionEn/descriptionZh",
                            "required": false,
                            "type": "string",
                            "x-example": "0101"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1,
                            "enum": [
                                0,
                                1
                            ]
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«Sku»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "创建SKU",
                    "operationId": "save_4",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "skuCreateRequest",
                            "description": "SKU创建表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/SkuCreateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«Sku»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/sku/listSkuTemplate": {
                "get": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "查看SKU模版列表",
                    "operationId": "listSkuTemplate",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "categoryId",
                            "in": "query",
                            "description": "SKU 类目",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: en/zh/code/descriptionEn/descriptionZh",
                            "required": false,
                            "type": "string",
                            "x-example": "0101"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1,
                            "enum": [
                                0,
                                1
                            ]
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«List«Sku»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/sku/{id}": {
                "get": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "查看SKU",
                    "operationId": "get_3",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«Sku»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "put": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "更新SKU",
                    "operationId": "update_4",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "skuUpdateRequest",
                            "description": "SKU更新表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/SkuUpdateRequest"
                            }
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«Sku»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "删除SKU",
                    "operationId": "delete_4",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/sku/{id}/status/{statusId}": {
                "put": {
                    "tags": [
                        "Sku"
                    ],
                    "summary": "更新SKU状态",
                    "operationId": "updateStatus_1",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        },
                        {
                            "name": "statusId",
                            "in": "path",
                            "description": "statusId",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/skuCategory": {
                "get": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "查看SKU类目列表",
                    "operationId": "page_3",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "creator",
                            "in": "query",
                            "description": "创建人",
                            "required": false,
                            "type": "string",
                            "x-example": "Sky"
                        },
                        {
                            "name": "endCreateTime",
                            "in": "query",
                            "description": "结束创建时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time",
                            "x-example": "2019-10-19 00:00:00"
                        },
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: en/zh/code",
                            "required": false,
                            "type": "string",
                            "x-example": "0101"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "startCreateTime",
                            "in": "query",
                            "description": "起始创建时间",
                            "required": false,
                            "type": "string",
                            "format": "date-time",
                            "x-example": "2019-10-18 00:00:00"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1,
                            "enum": [
                                0,
                                1
                            ]
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«SkuCategory»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "post": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "创建SKU类目",
                    "operationId": "save_3",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "skuCategoryCreateRequest",
                            "description": "SKU类目创建表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/SkuCategoryCreateRequest"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«SkuCategory»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/skuCategory/{id}": {
                "get": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "查看SKU类目",
                    "operationId": "get_2",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«SkuCategory»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "put": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "更新SKU类目",
                    "operationId": "update_3",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "skuCategoryUpdateRequest",
                            "description": "SKU类目更新表单",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/SkuCategoryUpdateRequest"
                            }
                        },
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«SkuCategory»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                },
                "delete": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "删除SKU类目",
                    "operationId": "delete_3",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "204": {
                            "description": "No Content"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    },
                    "deprecated": false
                }
            },
            "/skuCategory/{id}/status/{statusId}": {
                "put": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "更新SKU类目状态",
                    "operationId": "updateStatus",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        },
                        {
                            "name": "statusId",
                            "in": "path",
                            "description": "statusId",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«boolean»"
                            }
                        },
                        "201": {
                            "description": "Created"
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/skuCategory/{id}/tree": {
                "get": {
                    "tags": [
                        "SkuCategory"
                    ],
                    "summary": "查看SKU类目树",
                    "operationId": "tree",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        },
                        {
                            "in": "body",
                            "name": "level",
                            "description": "level",
                            "required": false,
                            "schema": {
                                "type": "integer",
                                "format": "int32"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«SkuCategoryTreeNode»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/vendor": {
                "get": {
                    "tags": [
                        "Vendor Management"
                    ],
                    "summary": "获取供应商列表",
                    "description": "list",
                    "operationId": "listUsingGET_1",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "exactValue",
                            "in": "query",
                            "description": "精确查询的值",
                            "required": false,
                            "type": "string",
                            "x-example": "id:2001"
                        },
                        {
                            "name": "pageNum",
                            "in": "query",
                            "description": "页码数",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "pageSize",
                            "in": "query",
                            "description": "每页大小",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 10
                        },
                        {
                            "name": "queryValue",
                            "in": "query",
                            "description": "模糊查询的值,field: id/name/code",
                            "required": false,
                            "type": "string",
                            "x-example": "China"
                        },
                        {
                            "name": "sortBies[0].asc",
                            "in": "query",
                            "description": "1:升序, 其他:降序",
                            "required": false,
                            "type": "integer",
                            "format": "int32",
                            "x-example": 1
                        },
                        {
                            "name": "sortBies[0].field",
                            "in": "query",
                            "description": "排序的字段",
                            "required": false,
                            "type": "string",
                            "x-example": "id"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "description": "状态 1,0,-1 1: 不启用, 其余均是启用",
                            "required": false,
                            "type": "array",
                            "items": {
                                "type": "integer",
                                "format": "int32"
                            },
                            "collectionFormat": "multi"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«PageInfo«VendorBO»»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            },
            "/vendor/{id}": {
                "get": {
                    "tags": [
                        "Vendor Management"
                    ],
                    "summary": "获取供应商",
                    "description": "get",
                    "operationId": "listUsingGET",
                    "produces": [
                        "*/*"
                    ],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "id",
                            "required": true,
                            "type": "integer",
                            "format": "int32"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK",
                            "schema": {
                                "$ref": "#/definitions/ResultInfo«VendorBO»"
                            }
                        },
                        "401": {
                            "description": "Unauthorized"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    },
                    "deprecated": false
                }
            }
        },
        "definitions": {
            "BaseDeliveryLineResource": {
                "type": "object",
                "properties": {
                    "adeviceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "adeviceName": {
                        "type": "string"
                    },
                    "afacId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "afacName": {
                        "type": "string"
                    },
                    "aportId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "aportName": {
                        "type": "string"
                    },
                    "deliveryInfo": {
                        "$ref": "#/definitions/BasicDeliveryInfo"
                    },
                    "operateUid": {
                        "type": "string"
                    },
                    "resUid": {
                        "type": "string"
                    },
                    "source": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "supportFile": {
                        "$ref": "#/definitions/BasicSupportFileInfo"
                    },
                    "supportInfos": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/BasicSupportInfo"
                        }
                    },
                    "type": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "vendorId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "vendorName": {
                        "type": "string"
                    },
                    "vendorResNo": {
                        "type": "string"
                    },
                    "zdeviceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "zdeviceName": {
                        "type": "string"
                    },
                    "zenResNo": {
                        "type": "string"
                    },
                    "zfacId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "zfacName": {
                        "type": "string"
                    },
                    "zportId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "zportName": {
                        "type": "string"
                    }
                },
                "title": "BaseDeliveryLineResource"
            },
            "BaseDeliveryLineResult": {
                "type": "object",
                "properties": {
                    "deliveryOrderDO": {
                        "$ref": "#/definitions/PurchaseDeliveryOrderDO"
                    },
                    "lineResources": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/BaseDeliveryLineResource"
                        }
                    },
                    "operateResult": {
                        "$ref": "#/definitions/ResultInfo«string»"
                    },
                    "type": {
                        "type": "string",
                        "enum": [
                            "CROSS_CONNECT",
                            "PRIVATE_LINE"
                        ]
                    },
                    "variables": {
                        "type": "object"
                    },
                    "workflowInstanceId": {
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "title": "BaseDeliveryLineResult"
            },
            "BasePurchaseDeliverySan": {
                "type": "object",
                "properties": {
                    "billingDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "contractPeriod": {
                        "type": "string"
                    },
                    "deliveryDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "purchaseDelivery": {
                        "$ref": "#/definitions/SimpleInfo"
                    },
                    "resId": {
                        "type": "string"
                    },
                    "supportInfos": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/BasicSupportInfo"
                        }
                    },
                    "vendor": {
                        "$ref": "#/definitions/SimpleInfo"
                    }
                },
                "title": "BasePurchaseDeliverySan"
            },
            "BasePurchaseDeliverySanResult": {
                "type": "object",
                "properties": {
                    "result": {
                        "$ref": "#/definitions/ResultInfo«int»"
                    },
                    "san": {
                        "$ref": "#/definitions/BasePurchaseDeliverySan"
                    }
                },
                "title": "BasePurchaseDeliverySanResult"
            },
            "BasicDeliveryInfo": {
                "type": "object",
                "properties": {
                    "billingDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "deliveryDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "expirationDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "purchaseDeliveryInstanceCode": {
                        "type": "string"
                    },
                    "purchaseDeliveryInstanceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "purchaseDeliveryOrderId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "purchaseDeliveryOrderNo": {
                        "type": "string"
                    },
                    "purchaseQuoteInstanceCode": {
                        "type": "string"
                    },
                    "purchaseQuoteInstanceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "purchaseQuoteOrderId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "purchaseQuoteOrderNo": {
                        "type": "string"
                    },
                    "term": {
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "title": "BasicDeliveryInfo"
            },
            "BasicSupportFileInfo": {
                "type": "object",
                "properties": {
                    "supportFileExtension": {
                        "type": "string"
                    },
                    "supportFileName": {
                        "type": "string"
                    },
                    "supportFileUrl": {
                        "type": "string"
                    }
                },
                "title": "BasicSupportFileInfo"
            },
            "BasicSupportInfo": {
                "type": "object",
                "properties": {
                    "contactMail": {
                        "type": "string"
                    },
                    "contactPerson": {
                        "type": "string"
                    },
                    "contactPhone": {
                        "type": "string"
                    },
                    "escalationLevel": {
                        "type": "string"
                    }
                },
                "title": "BasicSupportInfo"
            },
            "BudgetAssignUserRequest": {
                "type": "object",
                "required": [
                    "userUids"
                ],
                "properties": {
                    "userUids": {
                        "type": "array",
                        "example": 1,
                        "description": "执行组拥有用户ID集合",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "title": "BudgetAssignUserRequest"
            },
            "Cache": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "nativeCache": {
                        "type": "object"
                    }
                },
                "title": "Cache"
            },
            "CancelPurchaseRequestOrderDetailRequest": {
                "type": "object",
                "properties": {
                    "detailIds": {
                        "type": "array",
                        "description": "明细主键",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "reason": {
                        "type": "string",
                        "description": "取消原因"
                    }
                },
                "title": "CancelPurchaseRequestOrderDetailRequest",
                "description": "取消采购请求明细"
            },
            "CurrencyAmountStatistics": {
                "type": "object",
                "properties": {
                    "currencyName": {
                        "type": "string",
                        "description": "币种名称"
                    },
                    "totalAmount": {
                        "type": "number",
                        "description": "总计金额"
                    }
                },
                "title": "CurrencyAmountStatistics"
            },
            "DataCenterSearchModel": {
                "type": "object",
                "properties": {
                    "dataCenter": {
                        "type": "string",
                        "description": "Fac Name"
                    }
                },
                "title": "DataCenterSearchModel"
            },
            "IUser": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string"
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "jobTitle": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    },
                    "mobile": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "officeLocation": {
                        "type": "string"
                    },
                    "preferredLanguage": {
                        "type": "string"
                    },
                    "source": {
                        "type": "string"
                    },
                    "uid": {
                        "type": "string"
                    }
                },
                "title": "IUser"
            },
            "InstanceBO": {
                "type": "object",
                "properties": {
                    "activeDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "appParam": {
                        "type": "string"
                    },
                    "buyerId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "cancelTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "childId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "clientId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "code": {
                        "type": "string"
                    },
                    "contractHisId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "contractNo": {
                        "type": "string"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "createUserId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "dataId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "etaFinishRate": {
                        "type": "number",
                        "format": "float"
                    },
                    "etaNote": {
                        "type": "string"
                    },
                    "expireTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "extStatus": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "facId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "form": {
                        "type": "string"
                    },
                    "fromNodeId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "label": {
                        "type": "string"
                    },
                    "nodeId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "opStatus": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "orderGroupId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "orderId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ownerId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "parentId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "parentName": {
                        "type": "string"
                    },
                    "pmUserId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "priority": {
                        "type": "string"
                    },
                    "processId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "saleId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "taskName": {
                        "type": "string"
                    },
                    "tier2User": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "title": {
                        "type": "string"
                    },
                    "updateGroupId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "updateUserId": {
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "title": "InstanceBO"
            },
            "InstanceBizRequest": {
                "type": "object",
                "required": [
                    "bizCode",
                    "instanceCode"
                ],
                "properties": {
                    "bizCode": {
                        "type": "string",
                        "example": "PR#, PRB#, PO#",
                        "description": "当前节点约定的业务标识, 对应不同的业务处理策略"
                    },
                    "bizContent": {
                        "type": "string",
                        "description": "当前节点业务数据，json格式"
                    },
                    "instanceCode": {
                        "type": "string",
                        "description": "流程编码"
                    }
                },
                "title": "InstanceBizRequest",
                "description": "流程业务请求参数"
            },
            "InstanceBizResponse": {
                "type": "object",
                "properties": {
                    "bizCode": {
                        "type": "string",
                        "description": "请求时的业务标识"
                    },
                    "bizResponse": {
                        "type": "string",
                        "description": "业务响应结果, json格式"
                    },
                    "processResponse": {
                        "type": "string",
                        "description": "流程编码"
                    }
                },
                "title": "InstanceBizResponse",
                "description": "发起流程响应结果"
            },
            "JSONObject": {
                "type": "object",
                "title": "JSONObject",
                "additionalProperties": {
                    "type": "object"
                }
            },
            "Link": {
                "type": "object",
                "properties": {
                    "href": {
                        "type": "string"
                    },
                    "templated": {
                        "type": "boolean"
                    }
                },
                "title": "Link"
            },
            "Map«string,BaseDeliveryLineResult»": {
                "type": "object",
                "title": "Map«string,BaseDeliveryLineResult»",
                "additionalProperties": {
                    "$ref": "#/definitions/BaseDeliveryLineResult"
                }
            },
            "Map«string,BasePurchaseDeliverySanResult»": {
                "type": "object",
                "title": "Map«string,BasePurchaseDeliverySanResult»",
                "additionalProperties": {
                    "$ref": "#/definitions/BasePurchaseDeliverySanResult"
                }
            },
            "Map«string,Link»": {
                "type": "object",
                "title": "Map«string,Link»",
                "additionalProperties": {
                    "$ref": "#/definitions/Link"
                }
            },
            "ModelAndView": {
                "type": "object",
                "properties": {
                    "empty": {
                        "type": "boolean"
                    },
                    "model": {
                        "type": "object"
                    },
                    "modelMap": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "object"
                        }
                    },
                    "reference": {
                        "type": "boolean"
                    },
                    "status": {
                        "type": "string",
                        "enum": [
                            "100 CONTINUE",
                            "101 SWITCHING_PROTOCOLS",
                            "102 PROCESSING",
                            "103 CHECKPOINT",
                            "200 OK",
                            "201 CREATED",
                            "202 ACCEPTED",
                            "203 NON_AUTHORITATIVE_INFORMATION",
                            "204 NO_CONTENT",
                            "205 RESET_CONTENT",
                            "206 PARTIAL_CONTENT",
                            "207 MULTI_STATUS",
                            "208 ALREADY_REPORTED",
                            "226 IM_USED",
                            "300 MULTIPLE_CHOICES",
                            "301 MOVED_PERMANENTLY",
                            "302 FOUND",
                            "302 MOVED_TEMPORARILY",
                            "303 SEE_OTHER",
                            "304 NOT_MODIFIED",
                            "305 USE_PROXY",
                            "307 TEMPORARY_REDIRECT",
                            "308 PERMANENT_REDIRECT",
                            "400 BAD_REQUEST",
                            "401 UNAUTHORIZED",
                            "402 PAYMENT_REQUIRED",
                            "403 FORBIDDEN",
                            "404 NOT_FOUND",
                            "405 METHOD_NOT_ALLOWED",
                            "406 NOT_ACCEPTABLE",
                            "407 PROXY_AUTHENTICATION_REQUIRED",
                            "408 REQUEST_TIMEOUT",
                            "409 CONFLICT",
                            "410 GONE",
                            "411 LENGTH_REQUIRED",
                            "412 PRECONDITION_FAILED",
                            "413 PAYLOAD_TOO_LARGE",
                            "413 REQUEST_ENTITY_TOO_LARGE",
                            "414 URI_TOO_LONG",
                            "414 REQUEST_URI_TOO_LONG",
                            "415 UNSUPPORTED_MEDIA_TYPE",
                            "416 REQUESTED_RANGE_NOT_SATISFIABLE",
                            "417 EXPECTATION_FAILED",
                            "418 I_AM_A_TEAPOT",
                            "419 INSUFFICIENT_SPACE_ON_RESOURCE",
                            "420 METHOD_FAILURE",
                            "421 DESTINATION_LOCKED",
                            "422 UNPROCESSABLE_ENTITY",
                            "423 LOCKED",
                            "424 FAILED_DEPENDENCY",
                            "426 UPGRADE_REQUIRED",
                            "428 PRECONDITION_REQUIRED",
                            "429 TOO_MANY_REQUESTS",
                            "431 REQUEST_HEADER_FIELDS_TOO_LARGE",
                            "451 UNAVAILABLE_FOR_LEGAL_REASONS",
                            "500 INTERNAL_SERVER_ERROR",
                            "501 NOT_IMPLEMENTED",
                            "502 BAD_GATEWAY",
                            "503 SERVICE_UNAVAILABLE",
                            "504 GATEWAY_TIMEOUT",
                            "505 HTTP_VERSION_NOT_SUPPORTED",
                            "506 VARIANT_ALSO_NEGOTIATES",
                            "507 INSUFFICIENT_STORAGE",
                            "508 LOOP_DETECTED",
                            "509 BANDWIDTH_LIMIT_EXCEEDED",
                            "510 NOT_EXTENDED",
                            "511 NETWORK_AUTHENTICATION_REQUIRED"
                        ]
                    },
                    "view": {
                        "$ref": "#/definitions/View"
                    },
                    "viewName": {
                        "type": "string"
                    }
                },
                "title": "ModelAndView"
            },
            "PageInfo«InstanceBO»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/InstanceBO"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«InstanceBO»"
            },
            "PageInfo«PurchaseDic»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseDic"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«PurchaseDic»"
            },
            "PageInfo«PurchaseQuoteSearchModel»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseQuoteSearchModel"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«PurchaseQuoteSearchModel»"
            },
            "PageInfo«PurchaseRequestSearchModel»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseRequestSearchModel"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«PurchaseRequestSearchModel»"
            },
            "PageInfo«PurchaseTemplateField»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseTemplateField"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«PurchaseTemplateField»"
            },
            "PageInfo«PurchaseTemplate»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseTemplate"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«PurchaseTemplate»"
            },
            "PageInfo«SkuCategory»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/SkuCategory"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«SkuCategory»"
            },
            "PageInfo«Sku»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Sku"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«Sku»"
            },
            "PageInfo«VendorBO»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/VendorBO"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«VendorBO»"
            },
            "PageInfo«采购交付-工单配置»": {
                "type": "object",
                "properties": {
                    "endRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "firstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hasNextPage": {
                        "type": "boolean"
                    },
                    "hasPreviousPage": {
                        "type": "boolean"
                    },
                    "isFirstPage": {
                        "type": "boolean"
                    },
                    "isLastPage": {
                        "type": "boolean"
                    },
                    "lastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "list": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/采购交付-工单配置"
                        }
                    },
                    "navigateFirstPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigateLastPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatePages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "navigatepageNums": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "nextPage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageNum": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pageSize": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "pages": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "prePage": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "size": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startRow": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "total": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "title": "PageInfo«采购交付-工单配置»"
            },
            "PurchaseCoordinatorUpdateRequest": {
                "type": "object",
                "properties": {
                    "coordinator": {
                        "type": "string",
                        "description": "协调员名称"
                    },
                    "coordinatorUid": {
                        "type": "string",
                        "description": "协调员uid"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "采购订单号"
                    }
                },
                "title": "PurchaseCoordinatorUpdateRequest",
                "description": "采购协调员更新"
            },
            "PurchaseDeliveryOrder": {
                "type": "object",
                "properties": {
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "instanceCode": {
                        "type": "string",
                        "example": 1,
                        "description": "流程代码"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "流程实例ID"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "采购交付订单流水号"
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "description": "关联工单代码"
                    },
                    "relatedInstanceId": {
                        "type": "string",
                        "description": "关联工单ID"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    }
                },
                "title": "PurchaseDeliveryOrder"
            },
            "PurchaseDeliveryOrderDO": {
                "type": "object",
                "properties": {
                    "createBy": {
                        "type": "string"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "instanceCode": {
                        "type": "string"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "orderNo": {
                        "type": "string"
                    },
                    "relatedInstanceCode": {
                        "type": "string"
                    },
                    "relatedInstanceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "updateBy": {
                        "type": "string"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time"
                    }
                },
                "title": "PurchaseDeliveryOrderDO"
            },
            "PurchaseDeliveryOrderDetailBatchSaveRequest": {
                "type": "object",
                "properties": {
                    "deliveryOrderDetailUpdateList": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseDeliveryOrderDetailUpdateDTO"
                        }
                    }
                },
                "title": "PurchaseDeliveryOrderDetailBatchSaveRequest"
            },
            "PurchaseDeliveryOrderDetailDO": {
                "type": "object",
                "properties": {
                    "billingDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "createBy": {
                        "type": "string"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "deliveryDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "deliveryOrderNo": {
                        "type": "string"
                    },
                    "expiryDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "quoteDetailId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "updateBy": {
                        "type": "string"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "vendorId": {
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "title": "PurchaseDeliveryOrderDetailDO"
            },
            "PurchaseDeliveryOrderDetailUpdateDTO": {
                "type": "object",
                "required": [
                    "billingDate",
                    "deliveryDate",
                    "detailId"
                ],
                "properties": {
                    "billingDate": {
                        "type": "string",
                        "format": "date-time",
                        "example": "2019-11-22 00:00:00",
                        "description": "计费日期"
                    },
                    "deliveryDate": {
                        "type": "string",
                        "format": "date-time",
                        "example": "2019-11-22 00:00:00",
                        "description": "交付日期"
                    },
                    "detailId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "交付订单明细 ID"
                    }
                },
                "title": "PurchaseDeliveryOrderDetailUpdateDTO"
            },
            "PurchaseDeliveryOrderDetailWithStatistics": {
                "type": "object",
                "properties": {
                    "billingDate": {
                        "type": "string",
                        "format": "date-time",
                        "description": "计费日期"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "deliveryDate": {
                        "type": "string",
                        "format": "date-time",
                        "description": "交付日期"
                    },
                    "deliveryOrderNo": {
                        "type": "string",
                        "description": "采购交付订单流水号"
                    },
                    "expiryDate": {
                        "type": "string",
                        "format": "date-time",
                        "description": "到期日期"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "数量"
                    },
                    "quoteDetailId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购报价明细ID"
                    },
                    "quoteFieldValueJson": {
                        "type": "string",
                        "description": "采购报价 字段数据 JSON"
                    },
                    "quoteInstanceCode": {
                        "type": "string",
                        "example": "PO0000000001",
                        "description": "报价订单编号"
                    },
                    "quoteInstanceId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "报价订单ID"
                    },
                    "quoteOrderNo": {
                        "type": "string",
                        "example": "PO0000000001",
                        "description": "报价订单编号"
                    },
                    "quoteUiConfigs": {
                        "type": "array",
                        "description": "采购报价模板字段 UI 配置 JSON 数组",
                        "items": {
                            "type": "string"
                        }
                    },
                    "requestDetailId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购申请 Detail ID"
                    },
                    "requestFieldValueJson": {
                        "type": "string",
                        "description": "采购申请 字段数据 JSON"
                    },
                    "requestInstanceCode": {
                        "type": "string",
                        "example": "PR0000000001",
                        "description": "申请实例编号"
                    },
                    "requestInstanceId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "申请实例ID"
                    },
                    "requestOrderNo": {
                        "type": "string",
                        "example": "PR0000000001",
                        "description": "申请实例编号"
                    },
                    "requestUiConfigs": {
                        "type": "array",
                        "description": "采购申请模板字段 UI 配置 JSON 数组",
                        "items": {
                            "type": "string"
                        }
                    },
                    "skuCode": {
                        "type": "string",
                        "description": "SKU 代号"
                    },
                    "skuDescriptionEn": {
                        "type": "string",
                        "description": "SKU 英文描述"
                    },
                    "skuDescriptionZh": {
                        "type": "string",
                        "description": "SKU 中文描述"
                    },
                    "skuTemplates": {
                        "type": "array",
                        "description": "SKU 模板",
                        "items": {
                            "$ref": "#/definitions/SkuTemplate"
                        }
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "vendorId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "purchase_vendor表主键"
                    },
                    "vendorName": {
                        "type": "string",
                        "example": "China Mobile",
                        "description": "Vendor 名称"
                    }
                },
                "title": "PurchaseDeliveryOrderDetailWithStatistics"
            },
            "PurchaseDeliveryOrderWithStatistics": {
                "type": "object",
                "properties": {
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "deliveryOrderDetails": {
                        "type": "array",
                        "description": "交付订单明细",
                        "items": {
                            "$ref": "#/definitions/PurchaseDeliveryOrderDetailWithStatistics"
                        }
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "instanceCode": {
                        "type": "string",
                        "example": 1,
                        "description": "流程代码"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "流程实例ID"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "采购交付订单流水号"
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "description": "关联工单代码"
                    },
                    "relatedInstanceId": {
                        "type": "string",
                        "description": "关联工单ID"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    }
                },
                "title": "PurchaseDeliveryOrderWithStatistics"
            },
            "PurchaseDic": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string",
                        "description": "代号"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "name": {
                        "type": "string",
                        "description": "名称"
                    },
                    "parentCode": {
                        "type": "string",
                        "description": "父代号"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    }
                },
                "title": "PurchaseDic"
            },
            "PurchaseFieldValue": {
                "type": "object",
                "properties": {
                    "businessKey": {
                        "type": "string",
                        "description": "字段业务标签"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "creator": {
                        "type": "string",
                        "description": "创建人"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "displayValue": {
                        "type": "string",
                        "description": "字段显示值"
                    },
                    "fieldUid": {
                        "type": "string",
                        "description": "字段 UID"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "name": {
                        "type": "string",
                        "description": "字段名称"
                    },
                    "props": {
                        "type": "string",
                        "description": "前端组件 ID"
                    },
                    "purchaseId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购ID"
                    },
                    "purchaseModel": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购模型, 1: Request 2:Quote"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "updater": {
                        "type": "string",
                        "description": "更新人"
                    },
                    "value": {
                        "type": "string",
                        "description": "字段实际值"
                    }
                },
                "title": "PurchaseFieldValue"
            },
            "PurchaseFieldValueSaveRequest": {
                "type": "object",
                "required": [
                    "fieldValue",
                    "purchaseId",
                    "purchaseModel"
                ],
                "properties": {
                    "fieldValue": {
                        "type": "string",
                        "example": {
                            "1": "1"
                        },
                        "description": "采购数据 JSON 格式"
                    },
                    "fieldValueJSON": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "object"
                        }
                    },
                    "purchaseId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购ID"
                    },
                    "purchaseModel": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购主体"
                    }
                },
                "title": "PurchaseFieldValueSaveRequest"
            },
            "PurchaseQuoteCancelRequest": {
                "type": "object",
                "properties": {
                    "detailIds": {
                        "type": "array",
                        "description": "报价明细主键",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "reason": {
                        "type": "string",
                        "description": "取消原因"
                    }
                },
                "title": "PurchaseQuoteCancelRequest"
            },
            "PurchaseQuoteDetailRequest": {
                "type": "object",
                "properties": {
                    "detailId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "fieldValueJson": {
                        "type": "string"
                    }
                },
                "title": "PurchaseQuoteDetailRequest"
            },
            "PurchaseQuoteEsModel": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "instanceCode": {
                        "type": "string",
                        "description": "Instance Code"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Instance Id"
                    },
                    "prId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购需求"
                    },
                    "quoteOrderNo": {
                        "type": "string",
                        "description": "Order No"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "description": "状态"
                    },
                    "statusName": {
                        "type": "string",
                        "description": "状态名称"
                    }
                },
                "title": "PurchaseQuoteEsModel"
            },
            "PurchaseQuoteOrderDO": {
                "type": "object",
                "properties": {
                    "coordinator": {
                        "type": "string"
                    },
                    "coordinatorUid": {
                        "type": "string"
                    },
                    "createBy": {
                        "type": "string"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "currency": {
                        "type": "string"
                    },
                    "currencyTotalAmount": {
                        "type": "number"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "dollarTotalAmount": {
                        "type": "number"
                    },
                    "exchangeRate": {
                        "type": "number"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "instanceCode": {
                        "type": "string"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "negotiator": {
                        "type": "string"
                    },
                    "orderNo": {
                        "type": "string"
                    },
                    "remark": {
                        "type": "string"
                    },
                    "signEntity": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "startQuoteTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "updateBy": {
                        "type": "string"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "vendorId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "vendorSofId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "vendorSofRequired": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "zenSofId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "zenSofRequired": {
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "title": "PurchaseQuoteOrderDO"
            },
            "PurchaseQuoteOrderDetailWithStatistics": {
                "type": "object",
                "properties": {
                    "currencyAmountStatisticsList": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/CurrencyAmountStatistics"
                        }
                    },
                    "negotiator": {
                        "type": "string",
                        "description": "谈判人 UID"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "报价订单编号"
                    },
                    "requestQuoteDetails": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseRequestQuoteDetail"
                        }
                    },
                    "signEntity": {
                        "type": "integer",
                        "format": "int32",
                        "description": "签约主体"
                    },
                    "sofNo": {
                        "type": "string",
                        "description": "SOF No"
                    },
                    "vendorId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "供应商 ID"
                    },
                    "vendorSofFileExtension": {
                        "type": "string",
                        "description": "Vendor SOF 文件后缀"
                    },
                    "vendorSofFileName": {
                        "type": "string",
                        "description": "Vendor SOF 文件名称"
                    },
                    "vendorSofFileUrl": {
                        "type": "string",
                        "description": "Vendor SOF 文件路径"
                    },
                    "vendorSofRequired": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Vendor SOF 必填, 0:是 1:否 2:待定"
                    },
                    "zenSofFileExtension": {
                        "type": "string",
                        "description": "Zenlayer SOF 文件后缀"
                    },
                    "zenSofFileName": {
                        "type": "string",
                        "description": "Zenlayer SOF 文件名称"
                    },
                    "zenSofFileUrl": {
                        "type": "string",
                        "description": "Zenlayer SOF 文件路径"
                    },
                    "zenSofRequired": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Zenlayer SOF 必填, 0:是 1:否 2:待定"
                    }
                },
                "title": "PurchaseQuoteOrderDetailWithStatistics"
            },
            "PurchaseQuoteRemoveRequest": {
                "type": "object",
                "properties": {
                    "detailIds": {
                        "type": "array",
                        "description": "报价明细主键",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "reason": {
                        "type": "string",
                        "description": "移除原因"
                    }
                },
                "title": "PurchaseQuoteRemoveRequest",
                "description": "采购报价移除"
            },
            "PurchaseQuoteRequestSearchModel": {
                "type": "object",
                "properties": {
                    "prId": {
                        "type": "string",
                        "description": "PR ID"
                    },
                    "purpose": {
                        "type": "string",
                        "description": "purpose"
                    }
                },
                "title": "PurchaseQuoteRequestSearchModel"
            },
            "PurchaseQuoteSaveRequest": {
                "type": "object",
                "required": [
                    "operationType"
                ],
                "properties": {
                    "negotiator": {
                        "type": "string",
                        "example": 112,
                        "description": "谈判人UID"
                    },
                    "operationType": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "操作类型 1:保存 2：下一步"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "订单号"
                    },
                    "quoteDetailRequests": {
                        "type": "array",
                        "description": "报价明细数据",
                        "items": {
                            "$ref": "#/definitions/PurchaseQuoteDetailRequest"
                        }
                    },
                    "sofNo": {
                        "type": "string",
                        "description": "sof合同号"
                    },
                    "vendorId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "供应商主键"
                    },
                    "vendorSofFileExtension": {
                        "type": "string",
                        "example": 1,
                        "description": "供应商sof文件拓展名"
                    },
                    "vendorSofFileName": {
                        "type": "string",
                        "example": 1,
                        "description": "供应商sof文件名称"
                    },
                    "vendorSofFileUrl": {
                        "type": "string",
                        "example": 1,
                        "description": "供应商sof文件URL"
                    },
                    "vendorSofRequired": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "供应商sof是否必须"
                    },
                    "zenSofFileExtension": {
                        "type": "string",
                        "description": "层峰sof文件拓展名"
                    },
                    "zenSofFileName": {
                        "type": "string",
                        "description": "层峰sof文件名称"
                    },
                    "zenSofFileUrl": {
                        "type": "string",
                        "example": 11,
                        "description": "层峰sof文件URL"
                    },
                    "zenSofRequired": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "层峰sof是否必须"
                    }
                },
                "title": "PurchaseQuoteSaveRequest",
                "description": "采购报价保存"
            },
            "PurchaseQuoteSearchModel": {
                "type": "object",
                "properties": {
                    "coordinator": {
                        "type": "string",
                        "description": "协调员"
                    },
                    "coordinatorUid": {
                        "type": "string",
                        "description": "协调员UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Create Time"
                    },
                    "currentStep": {
                        "type": "string",
                        "description": "当前步骤"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "instanceCode": {
                        "type": "string",
                        "description": "流程编码"
                    },
                    "instanceId": {
                        "type": "string",
                        "description": "流程ID"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "PO#"
                    },
                    "remark": {
                        "type": "string",
                        "description": "备注"
                    },
                    "requestSearchModels": {
                        "type": "array",
                        "description": "采购申请信息",
                        "items": {
                            "$ref": "#/definitions/PurchaseQuoteRequestSearchModel"
                        }
                    },
                    "sku": {
                        "type": "array",
                        "description": "sku信息",
                        "items": {
                            "$ref": "#/definitions/PurchaseSkuSearchModel"
                        }
                    },
                    "startQuoteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "发起报价时间"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "状态名称"
                    },
                    "statusName": {
                        "type": "string",
                        "description": "状态名称"
                    },
                    "vendorName": {
                        "type": "string",
                        "description": "供应商名称"
                    }
                },
                "title": "PurchaseQuoteSearchModel"
            },
            "PurchaseQuoteSplitRequest": {
                "type": "object",
                "properties": {
                    "quoteSplits": {
                        "type": "array",
                        "description": "报价拆分信息",
                        "items": {
                            "$ref": "#/definitions/QuoteSplit"
                        }
                    },
                    "reason": {
                        "type": "string",
                        "description": "拆分原因"
                    }
                },
                "title": "PurchaseQuoteSplitRequest",
                "description": "采购报价拆分"
            },
            "PurchaseQuoteToDeliveryRequest": {
                "type": "object",
                "properties": {
                    "billingDate": {
                        "type": "string",
                        "format": "date-time",
                        "example": "2019-11-22 00:00:00",
                        "description": "开始计费日期"
                    },
                    "deliveryDate": {
                        "type": "string",
                        "format": "date-time",
                        "example": "2019-11-22 00:00:00",
                        "description": "预计交付日期"
                    },
                    "quoteToDeliveries": {
                        "type": "array",
                        "description": "待转成交付订单的请求集合",
                        "items": {
                            "$ref": "#/definitions/QuoteToDelivery"
                        }
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "example": "PO123456",
                        "description": "关联的工单"
                    },
                    "relatedInstanceId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 123456,
                        "description": "关联的工单ID"
                    },
                    "variables": {
                        "type": "object",
                        "description": "工单实例的环境变量"
                    }
                },
                "title": "PurchaseQuoteToDeliveryRequest",
                "description": "采购请求订单转报价订单"
            },
            "PurchaseRequestCoordinatorUpdateRequest": {
                "type": "object",
                "properties": {
                    "coordinator": {
                        "type": "string",
                        "description": "协调员名称"
                    },
                    "coordinatorUid": {
                        "type": "string",
                        "description": "协调员UID"
                    },
                    "detailId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "明细主键"
                    }
                },
                "title": "PurchaseRequestCoordinatorUpdateRequest",
                "description": "采购请求协调员更新"
            },
            "PurchaseRequestOrder": {
                "type": "object",
                "properties": {
                    "initiator": {
                        "type": "string",
                        "description": "发起人"
                    },
                    "initiatorUid": {
                        "type": "string",
                        "description": "发起人 UID"
                    },
                    "instanceCode": {
                        "type": "string",
                        "description": "采购申请实例流水号"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购申请实例"
                    },
                    "orderNo": {
                        "type": "string",
                        "description": "采购申请订单流水号"
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "description": "采购申请关联的工单流水号"
                    },
                    "relatedInstanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购申请关联的工单ID"
                    }
                },
                "title": "PurchaseRequestOrder"
            },
            "PurchaseRequestOrderCreateRequest": {
                "type": "object",
                "required": [
                    "instanceCode",
                    "instanceId"
                ],
                "properties": {
                    "instanceCode": {
                        "type": "string",
                        "description": "流程编码"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "流程ID"
                    }
                },
                "title": "PurchaseRequestOrderCreateRequest",
                "description": "采购请求订单创建"
            },
            "PurchaseRequestOrderDetail": {
                "type": "object",
                "properties": {
                    "contractTotal": {
                        "type": "number",
                        "description": "带稅总计金额"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "creator": {
                        "type": "string",
                        "description": "创建人"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "exchangeRate": {
                        "type": "number",
                        "description": "换算 USD 汇率"
                    },
                    "fieldValueJson": {
                        "type": "string",
                        "description": "模板字段数据 JSON"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购申请 Detail ID"
                    },
                    "mrcTotal": {
                        "type": "number",
                        "description": "月付 总计金额"
                    },
                    "nrcTotal": {
                        "type": "number",
                        "description": "一次性 总计金额"
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "description": "关联工单流水号"
                    },
                    "relatedInstanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "关联工单ID"
                    },
                    "requestOrderNo": {
                        "type": "string",
                        "description": "采购申请订单流水号"
                    },
                    "skuCode": {
                        "type": "string",
                        "description": "SKU 代号"
                    },
                    "skuDescriptionEn": {
                        "type": "string",
                        "description": "SKU 英文描述"
                    },
                    "skuDescriptionZh": {
                        "type": "string",
                        "description": "SKU 中文描述"
                    },
                    "skuEn": {
                        "type": "string",
                        "description": "SKU 英文名称"
                    },
                    "skuTemplates": {
                        "type": "array",
                        "description": "SKU 模板",
                        "items": {
                            "$ref": "#/definitions/SkuTemplate"
                        }
                    },
                    "skuZh": {
                        "type": "string",
                        "description": "SKU 中文名称"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购申请 Detail 状态 0:草稿 1:审批中  2:审批通过 3:被驳回 4:转PO 5:终止"
                    },
                    "uiConfigs": {
                        "type": "array",
                        "description": "采购申请 字段 UI 配置",
                        "items": {
                            "type": "string"
                        }
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "updater": {
                        "type": "string",
                        "description": "更新人"
                    }
                },
                "title": "PurchaseRequestOrderDetail"
            },
            "PurchaseRequestOrderDetailCreateRequest": {
                "type": "object",
                "required": [
                    "fieldValueJson",
                    "requestOrderNo",
                    "skuCode"
                ],
                "properties": {
                    "fieldValueJson": {
                        "type": "string",
                        "example": {
                            "f1": 1,
                            "f2": "aa"
                        },
                        "description": "字段值JSON"
                    },
                    "requestOrderNo": {
                        "type": "string",
                        "example": 123,
                        "description": "采购请求订单流水号"
                    },
                    "skuCode": {
                        "type": "string",
                        "example": 123,
                        "description": "选择的sku代码"
                    }
                },
                "title": "PurchaseRequestOrderDetailCreateRequest",
                "description": "采购请求订单明细"
            },
            "PurchaseRequestOrderDetailMailResponse": {
                "type": "object",
                "properties": {
                    "budgetName": {
                        "type": "string"
                    },
                    "contractTotal": {
                        "type": "number"
                    },
                    "facName": {
                        "type": "string"
                    },
                    "mrcTotal": {
                        "type": "number"
                    },
                    "nrcTotal": {
                        "type": "number"
                    },
                    "purpose": {
                        "type": "string"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "sku": {
                        "type": "string"
                    },
                    "tax": {
                        "type": "number"
                    },
                    "term": {
                        "type": "number"
                    }
                },
                "title": "PurchaseRequestOrderDetailMailResponse"
            },
            "PurchaseRequestOrderDetailUpdateRequest": {
                "type": "object",
                "required": [
                    "fieldValueJson",
                    "id"
                ],
                "properties": {
                    "fieldValueJson": {
                        "type": "string",
                        "example": {
                            "f1": 1,
                            "f2": "aa"
                        },
                        "description": "字段值JSON"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "唯一标识采购请求订单明细"
                    },
                    "skuCode": {
                        "type": "string",
                        "example": 123,
                        "description": "选择的sku代码"
                    }
                },
                "title": "PurchaseRequestOrderDetailUpdateRequest",
                "description": "采购请求订单明细"
            },
            "PurchaseRequestOrderDetailWithStatistics": {
                "type": "object",
                "properties": {
                    "currencyAmountStatisticsList": {
                        "type": "array",
                        "description": "采购申请金额汇总列表",
                        "items": {
                            "$ref": "#/definitions/CurrencyAmountStatistics"
                        }
                    },
                    "detailList": {
                        "type": "array",
                        "description": "采购申请 Detail 列表",
                        "items": {
                            "$ref": "#/definitions/PurchaseRequestOrderDetail"
                        }
                    }
                },
                "title": "PurchaseRequestOrderDetailWithStatistics"
            },
            "PurchaseRequestOrderMailResponse": {
                "type": "object",
                "properties": {
                    "currencyAmountStatisticsList": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/CurrencyAmountStatistics"
                        }
                    },
                    "detailList": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseRequestOrderDetailMailResponse"
                        }
                    },
                    "initiator": {
                        "type": "string"
                    },
                    "instanceCode": {
                        "type": "string"
                    },
                    "orderNo": {
                        "type": "string"
                    }
                },
                "title": "PurchaseRequestOrderMailResponse"
            },
            "PurchaseRequestQuoteDetail": {
                "type": "object",
                "properties": {
                    "contractTotal": {
                        "type": "number",
                        "description": "含稅总计金额"
                    },
                    "deliveryOrders": {
                        "type": "array",
                        "description": "交付工单",
                        "items": {
                            "$ref": "#/definitions/PurchaseDeliveryOrder"
                        }
                    },
                    "deliveryQty": {
                        "type": "integer",
                        "format": "int32",
                        "description": "交付数量"
                    },
                    "mrcTotal": {
                        "type": "number",
                        "description": "月付价格 总计金额"
                    },
                    "nrcTotal": {
                        "type": "number",
                        "description": "一次性价格 总计金额"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32",
                        "description": "订单数量"
                    },
                    "quoteDetailId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购报价 Detail ID"
                    },
                    "quoteFieldValueJson": {
                        "type": "string",
                        "description": "采购报价 字段数据 JSON"
                    },
                    "quoteUiConfigs": {
                        "type": "array",
                        "description": "采购报价模板字段 UI 配置 JSON 数组",
                        "items": {
                            "type": "string"
                        }
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "description": "关联工单代码"
                    },
                    "requestDetailId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购申请 Detail ID"
                    },
                    "requestFieldValueJson": {
                        "type": "string",
                        "description": "采购申请 字段数据 JSON"
                    },
                    "requestUiConfigs": {
                        "type": "array",
                        "description": "采购申请模板字段 UI 配置 JSON 数组",
                        "items": {
                            "type": "string"
                        }
                    },
                    "saveCount": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "PO保存次数"
                    },
                    "skuCode": {
                        "type": "string",
                        "description": "SKU 代号"
                    },
                    "skuDescriptionEn": {
                        "type": "string",
                        "description": "SKU 英文描述"
                    },
                    "skuDescriptionZh": {
                        "type": "string",
                        "description": "SKU 中文描述"
                    },
                    "skuTemplates": {
                        "type": "array",
                        "description": "SKU 模板",
                        "items": {
                            "$ref": "#/definitions/SkuTemplate"
                        }
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "description": "报价 Detail 状态 0:审批中 1：审批通过 2:被驳回 3:取消"
                    },
                    "taxTotal": {
                        "type": "number",
                        "description": "稅金额"
                    }
                },
                "title": "PurchaseRequestQuoteDetail"
            },
            "PurchaseRequestSearchModel": {
                "type": "object",
                "properties": {
                    "budgetUnitName": {
                        "type": "string",
                        "description": "Budget Unit Name"
                    },
                    "coordinatorUid": {
                        "type": "string",
                        "description": "Coordinator"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Create Time"
                    },
                    "currentStep": {
                        "type": "string",
                        "description": "Current Step"
                    },
                    "currentStepId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Current Step Id"
                    },
                    "dataCenterList": {
                        "type": "array",
                        "description": "Fac Name",
                        "items": {
                            "$ref": "#/definitions/DataCenterSearchModel"
                        }
                    },
                    "expectedTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "Expected Time"
                    },
                    "fieldValueJson": {
                        "type": "string",
                        "description": "字段值配置"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "initiator": {
                        "type": "string",
                        "description": "Initiator"
                    },
                    "instanceCode": {
                        "type": "string",
                        "description": "Instance Code"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Instance Id"
                    },
                    "prId": {
                        "type": "string",
                        "description": "PR Detail id 次排序字段"
                    },
                    "prOrderId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Pr order id 主排序字段"
                    },
                    "prOrderNo": {
                        "type": "string",
                        "description": "Pr order no"
                    },
                    "purchaseCoordinator": {
                        "type": "string",
                        "description": "Coordinator"
                    },
                    "purchaseType": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Purchase Type"
                    },
                    "purchaseTypeName": {
                        "type": "string",
                        "description": "Purchase Type Name"
                    },
                    "purpose": {
                        "type": "string",
                        "description": "Purpose"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Quantity"
                    },
                    "quoteSearchModels": {
                        "type": "array",
                        "description": "Purchase Quote",
                        "items": {
                            "$ref": "#/definitions/PurchaseQuoteEsModel"
                        }
                    },
                    "relatedInstanceCode": {
                        "type": "string",
                        "description": "Related Instance Code"
                    },
                    "relatedInstanceId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Related Instance Id"
                    },
                    "skuCode": {
                        "type": "string",
                        "description": "Sku Code"
                    },
                    "skuDescriptionEn": {
                        "type": "string",
                        "description": "Sku Name"
                    },
                    "skuDescriptionZh": {
                        "type": "string",
                        "description": "Sku Name"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "description": "Status"
                    },
                    "statusName": {
                        "type": "string",
                        "description": "Status Name"
                    }
                },
                "title": "PurchaseRequestSearchModel"
            },
            "PurchaseRequestToQuoteRequest": {
                "type": "object",
                "properties": {
                    "instanceCode": {
                        "type": "string",
                        "example": 1231,
                        "description": "流程实例ID"
                    },
                    "instanceId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1231,
                        "description": "流程实例ID"
                    },
                    "requestToQuotes": {
                        "type": "array",
                        "description": "待转成报价的请求集合",
                        "items": {
                            "$ref": "#/definitions/RequestToQuote"
                        }
                    },
                    "signEntity": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1231,
                        "description": "签约主体ID"
                    }
                },
                "title": "PurchaseRequestToQuoteRequest",
                "description": "采购请求订单转报价订单"
            },
            "PurchaseSkuSearchModel": {
                "type": "object",
                "properties": {
                    "skuCode": {
                        "type": "string",
                        "description": "skuCode"
                    },
                    "skuDescriptionEn": {
                        "type": "string",
                        "description": "sku英文描述"
                    },
                    "skuDescriptionZh": {
                        "type": "string",
                        "description": "sku中文描述"
                    }
                },
                "title": "PurchaseSkuSearchModel"
            },
            "PurchaseTemplate": {
                "type": "object",
                "properties": {
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "creator": {
                        "type": "string",
                        "description": "创建人"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "name": {
                        "type": "string",
                        "description": "名称"
                    },
                    "type": {
                        "type": "integer",
                        "format": "int32",
                        "description": "类型 1: 资源模板 2: 报价模板"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "updater": {
                        "type": "string",
                        "description": "更新人"
                    }
                },
                "title": "PurchaseTemplate"
            },
            "PurchaseTemplateCreateRequest": {
                "type": "object",
                "required": [
                    "name",
                    "type"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "example": 1,
                        "description": "模板名称"
                    },
                    "type": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "模板类型 资源/报价",
                        "enum": [
                            1,
                            2
                        ]
                    }
                },
                "title": "PurchaseTemplateCreateRequest"
            },
            "PurchaseTemplateField": {
                "type": "object",
                "properties": {
                    "businessKey": {
                        "type": "string",
                        "description": "业务标签"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "creator": {
                        "type": "string",
                        "description": "创建人"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "en": {
                        "type": "string",
                        "description": "英文名称"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "name": {
                        "type": "string",
                        "description": "字段名称"
                    },
                    "props": {
                        "type": "string",
                        "description": "前端组件 ID"
                    },
                    "remark": {
                        "type": "string",
                        "description": "备注"
                    },
                    "require": {
                        "type": "integer",
                        "format": "int32",
                        "description": "必填"
                    },
                    "sequence": {
                        "type": "integer",
                        "format": "int32",
                        "description": "顺序"
                    },
                    "templateId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "模板 ID"
                    },
                    "type": {
                        "type": "string",
                        "description": "前端组件类型"
                    },
                    "uiConfigJson": {
                        "type": "string",
                        "description": "前端 UI 配置 JSON"
                    },
                    "uid": {
                        "type": "string",
                        "description": "对象UID"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "updater": {
                        "type": "string",
                        "description": "更新人"
                    },
                    "zh": {
                        "type": "string",
                        "description": "中文名称"
                    }
                },
                "title": "PurchaseTemplateField"
            },
            "PurchaseTemplateFieldBatchUpdateRequest": {
                "type": "object",
                "required": [
                    "name",
                    "props",
                    "require",
                    "sequence",
                    "templateId",
                    "type",
                    "uiConfigJson",
                    "uid"
                ],
                "properties": {
                    "businessKey": {
                        "type": "string",
                        "example": "NRC",
                        "description": "业务逻辑绑定字段"
                    },
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "字段ID"
                    },
                    "name": {
                        "type": "string",
                        "example": 1,
                        "description": "名称"
                    },
                    "props": {
                        "type": "string",
                        "example": 1,
                        "description": "前端组件ID"
                    },
                    "require": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "必填",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "sequence": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "顺序"
                    },
                    "templateId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "模板ID"
                    },
                    "type": {
                        "type": "string",
                        "example": 1,
                        "description": "组件类型"
                    },
                    "uiConfigJson": {
                        "type": "string",
                        "example": 1,
                        "description": "UI 配置 JSON"
                    },
                    "uid": {
                        "type": "string",
                        "example": 1,
                        "description": "字段UID"
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "PurchaseTemplateFieldBatchUpdateRequest"
            },
            "PurchaseTemplateFieldCreateRequest": {
                "type": "object",
                "required": [
                    "name",
                    "props",
                    "require",
                    "sequence",
                    "templateId",
                    "type",
                    "uiConfigJson",
                    "uid"
                ],
                "properties": {
                    "businessKey": {
                        "type": "string",
                        "example": "NRC",
                        "description": "业务逻辑绑定字段"
                    },
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "name": {
                        "type": "string",
                        "example": 1,
                        "description": "名称"
                    },
                    "props": {
                        "type": "string",
                        "example": 1,
                        "description": "前端组件ID"
                    },
                    "remark": {
                        "type": "string",
                        "example": 1,
                        "description": "备注"
                    },
                    "require": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "必填",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "sequence": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "顺序"
                    },
                    "templateId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "模板ID"
                    },
                    "type": {
                        "type": "string",
                        "example": 1,
                        "description": "组件类型"
                    },
                    "uiConfigJson": {
                        "type": "string",
                        "example": 1,
                        "description": "UI 配置 JSON"
                    },
                    "uid": {
                        "type": "string",
                        "example": 1,
                        "description": "字段UID"
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "PurchaseTemplateFieldCreateRequest"
            },
            "PurchaseTemplateFieldUpdateRequest": {
                "type": "object",
                "required": [
                    "name",
                    "props",
                    "require",
                    "sequence",
                    "type",
                    "uiConfigJson"
                ],
                "properties": {
                    "businessKey": {
                        "type": "string",
                        "example": "NRC",
                        "description": "业务逻辑绑定字段"
                    },
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "name": {
                        "type": "string",
                        "example": 1,
                        "description": "名称"
                    },
                    "props": {
                        "type": "string",
                        "example": 1,
                        "description": "前端组件ID"
                    },
                    "remark": {
                        "type": "string",
                        "example": 1,
                        "description": "备注"
                    },
                    "require": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "必填",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "sequence": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "顺序"
                    },
                    "type": {
                        "type": "string",
                        "example": 1,
                        "description": "组件类型"
                    },
                    "uiConfigJson": {
                        "type": "string",
                        "example": 1,
                        "description": "UI 配置 JSON"
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "PurchaseTemplateFieldUpdateRequest"
            },
            "PurchaseTemplateJsonResponse": {
                "type": "object",
                "properties": {
                    "columns": {
                        "type": "array",
                        "items": {
                            "type": "object"
                        }
                    },
                    "purchaseTemplateFields": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseTemplateField"
                        }
                    }
                },
                "title": "PurchaseTemplateJsonResponse"
            },
            "PurchaseTemplateUpdateRequest": {
                "type": "object",
                "required": [
                    "name"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "example": 1,
                        "description": "模板名称"
                    }
                },
                "title": "PurchaseTemplateUpdateRequest"
            },
            "QuoteSplit": {
                "type": "object",
                "properties": {
                    "detailId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 12,
                        "description": "报价明细"
                    },
                    "splitQty": {
                        "type": "integer",
                        "format": "int32",
                        "example": 3,
                        "description": "拆分数量"
                    }
                },
                "title": "QuoteSplit",
                "description": "报价拆分"
            },
            "QuoteToDelivery": {
                "type": "object",
                "properties": {
                    "detailId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 234,
                        "description": "采购请求明细主键"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32",
                        "example": 2,
                        "description": "转成报价订单的数量"
                    }
                },
                "title": "QuoteToDelivery",
                "description": "待转成交付订单的请求"
            },
            "RequestToQuote": {
                "type": "object",
                "properties": {
                    "detailId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 234,
                        "description": "采购请求明细主键"
                    },
                    "qty": {
                        "type": "integer",
                        "format": "int32",
                        "example": 2,
                        "description": "转成报价订单的数量"
                    }
                },
                "title": "RequestToQuote",
                "description": "待转成报价的请求"
            },
            "ResultInfo": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo"
            },
            "ResultInfo«BasePurchaseDeliverySan»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/BasePurchaseDeliverySan"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«BasePurchaseDeliverySan»"
            },
            "ResultInfo«Cache»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/Cache"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«Cache»"
            },
            "ResultInfo«Collection«string»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«Collection«string»»"
            },
            "ResultInfo«InstanceBizResponse»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/InstanceBizResponse"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«InstanceBizResponse»"
            },
            "ResultInfo«JSONObject»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "object"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«JSONObject»"
            },
            "ResultInfo«List«IUser»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/IUser"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«IUser»»"
            },
            "ResultInfo«List«Map«string,BaseDeliveryLineResult»»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Map«string,BaseDeliveryLineResult»"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«Map«string,BaseDeliveryLineResult»»»"
            },
            "ResultInfo«List«PurchaseDeliveryOrderDO»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseDeliveryOrderDO"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«PurchaseDeliveryOrderDO»»"
            },
            "ResultInfo«List«PurchaseDeliveryOrderDetailDO»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseDeliveryOrderDetailDO"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«PurchaseDeliveryOrderDetailDO»»"
            },
            "ResultInfo«List«PurchaseFieldValue»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseFieldValue"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«PurchaseFieldValue»»"
            },
            "ResultInfo«List«PurchaseRequestOrderDetail»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/PurchaseRequestOrderDetail"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«PurchaseRequestOrderDetail»»"
            },
            "ResultInfo«List«Sku»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/Sku"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«Sku»»"
            },
            "ResultInfo«List«int»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«int»»"
            },
            "ResultInfo«List«采购交付-工单配置-SKU»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/采购交付-工单配置-SKU"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«List«采购交付-工单配置-SKU»»"
            },
            "ResultInfo«Map«string,BasePurchaseDeliverySanResult»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/BasePurchaseDeliverySanResult"
                        }
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«Map«string,BasePurchaseDeliverySanResult»»"
            },
            "ResultInfo«Map«string,object»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«Map«string,object»»"
            },
            "ResultInfo«PageInfo«InstanceBO»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«InstanceBO»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«InstanceBO»»"
            },
            "ResultInfo«PageInfo«PurchaseDic»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«PurchaseDic»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«PurchaseDic»»"
            },
            "ResultInfo«PageInfo«PurchaseQuoteSearchModel»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«PurchaseQuoteSearchModel»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«PurchaseQuoteSearchModel»»"
            },
            "ResultInfo«PageInfo«PurchaseRequestSearchModel»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«PurchaseRequestSearchModel»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«PurchaseRequestSearchModel»»"
            },
            "ResultInfo«PageInfo«PurchaseTemplateField»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«PurchaseTemplateField»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«PurchaseTemplateField»»"
            },
            "ResultInfo«PageInfo«PurchaseTemplate»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«PurchaseTemplate»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«PurchaseTemplate»»"
            },
            "ResultInfo«PageInfo«SkuCategory»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«SkuCategory»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«SkuCategory»»"
            },
            "ResultInfo«PageInfo«Sku»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«Sku»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«Sku»»"
            },
            "ResultInfo«PageInfo«VendorBO»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«VendorBO»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«VendorBO»»"
            },
            "ResultInfo«PageInfo«采购交付-工单配置»»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PageInfo«采购交付-工单配置»"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PageInfo«采购交付-工单配置»»"
            },
            "ResultInfo«PurchaseDeliveryOrderWithStatistics»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseDeliveryOrderWithStatistics"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseDeliveryOrderWithStatistics»"
            },
            "ResultInfo«PurchaseQuoteOrderDO»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseQuoteOrderDO"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseQuoteOrderDO»"
            },
            "ResultInfo«PurchaseQuoteOrderDetailWithStatistics»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseQuoteOrderDetailWithStatistics"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseQuoteOrderDetailWithStatistics»"
            },
            "ResultInfo«PurchaseRequestOrderDetailWithStatistics»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseRequestOrderDetailWithStatistics"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseRequestOrderDetailWithStatistics»"
            },
            "ResultInfo«PurchaseRequestOrderMailResponse»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseRequestOrderMailResponse"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseRequestOrderMailResponse»"
            },
            "ResultInfo«PurchaseRequestOrder»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseRequestOrder"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseRequestOrder»"
            },
            "ResultInfo«PurchaseTemplateField»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseTemplateField"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseTemplateField»"
            },
            "ResultInfo«PurchaseTemplateJsonResponse»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseTemplateJsonResponse"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseTemplateJsonResponse»"
            },
            "ResultInfo«PurchaseTemplate»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/PurchaseTemplate"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«PurchaseTemplate»"
            },
            "ResultInfo«SkuCategoryTreeNode»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/SkuCategoryTreeNode"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«SkuCategoryTreeNode»"
            },
            "ResultInfo«SkuCategory»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/SkuCategory"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«SkuCategory»"
            },
            "ResultInfo«Sku»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/Sku"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«Sku»"
            },
            "ResultInfo«UploadConfigObj»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/UploadConfigObj"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«UploadConfigObj»"
            },
            "ResultInfo«VendorBO»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/VendorBO"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«VendorBO»"
            },
            "ResultInfo«boolean»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "boolean"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«boolean»"
            },
            "ResultInfo«int»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«int»"
            },
            "ResultInfo«string»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "type": "string"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«string»"
            },
            "ResultInfo«采购交付-工单配置»": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string"
                    },
                    "data": {
                        "$ref": "#/definitions/采购交付-工单配置"
                    },
                    "msg": {
                        "type": "string"
                    },
                    "ret": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "success": {
                        "type": "boolean"
                    }
                },
                "title": "ResultInfo«采购交付-工单配置»"
            },
            "SimpleInfo": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "string",
                        "description": "字符编码"
                    },
                    "desc": {
                        "type": "string",
                        "description": "信息描述"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "数值编号"
                    },
                    "name": {
                        "type": "string",
                        "description": "信息内容"
                    }
                },
                "title": "SimpleInfo"
            },
            "Sku": {
                "type": "object",
                "properties": {
                    "brand": {
                        "type": "string",
                        "description": "品牌"
                    },
                    "category": {
                        "description": "SKU 类别",
                        "$ref": "#/definitions/SkuCategory"
                    },
                    "categoryId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "SKU 类别 ID"
                    },
                    "code": {
                        "type": "string",
                        "description": "代码"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "creator": {
                        "type": "string",
                        "description": "创建人"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "descriptionEn": {
                        "type": "string",
                        "description": "英文描述"
                    },
                    "descriptionZh": {
                        "type": "string",
                        "description": "中文描述"
                    },
                    "en": {
                        "type": "string",
                        "description": "英文名称"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "remark": {
                        "type": "string",
                        "description": "备注"
                    },
                    "skuTemplates": {
                        "type": "array",
                        "description": "SKU 模板",
                        "items": {
                            "$ref": "#/definitions/SkuTemplate"
                        }
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "description": "状态 1: 有效 0: 无效"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "updater": {
                        "type": "string",
                        "description": "更新人"
                    },
                    "zh": {
                        "type": "string",
                        "description": "中文名称"
                    }
                },
                "title": "Sku"
            },
            "SkuCategory": {
                "type": "object",
                "properties": {
                    "allParentNameEn": {
                        "type": "string",
                        "description": "父级英文名称 eg:x.y.z"
                    },
                    "allParentNameZh": {
                        "type": "string",
                        "description": "父级中文名称 eg:x.y.z"
                    },
                    "code": {
                        "type": "string",
                        "description": "代号"
                    },
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "creator": {
                        "type": "string",
                        "description": "创建人"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "en": {
                        "type": "string",
                        "description": "英文名称"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "level": {
                        "type": "integer",
                        "format": "int32",
                        "description": "层级"
                    },
                    "parent": {
                        "description": "父级",
                        "$ref": "#/definitions/SkuCategory"
                    },
                    "parentId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "父级 ID"
                    },
                    "remark": {
                        "type": "string",
                        "description": "备注"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "description": "状态 1: 有效 0: 无效"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    },
                    "updater": {
                        "type": "string",
                        "description": "更新人"
                    },
                    "zh": {
                        "type": "string",
                        "description": "中文名称"
                    }
                },
                "title": "SkuCategory"
            },
            "SkuCategoryCreateRequest": {
                "type": "object",
                "required": [
                    "en",
                    "status",
                    "zh"
                ],
                "properties": {
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "parentId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "父级"
                    },
                    "remark": {
                        "type": "string",
                        "example": 1,
                        "description": "备注"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "状态",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "SkuCategoryCreateRequest"
            },
            "SkuCategoryTreeNode": {
                "type": "object",
                "properties": {
                    "children": {
                        "type": "array",
                        "description": "子类别",
                        "items": {
                            "$ref": "#/definitions/SkuCategoryTreeNode"
                        }
                    },
                    "code": {
                        "type": "string",
                        "description": "代号"
                    },
                    "en": {
                        "type": "string",
                        "description": "英文名称"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "ID"
                    },
                    "isSku": {
                        "type": "boolean",
                        "description": "是否SKU"
                    },
                    "level": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "层级"
                    },
                    "parentId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "父级 ID"
                    },
                    "remarkEn": {
                        "type": "string",
                        "description": "英文备注"
                    },
                    "remarkZh": {
                        "type": "string",
                        "description": "中文备注"
                    },
                    "zh": {
                        "type": "string",
                        "description": "中文名称"
                    }
                },
                "title": "SkuCategoryTreeNode"
            },
            "SkuCategoryUpdateRequest": {
                "type": "object",
                "required": [
                    "en",
                    "status",
                    "zh"
                ],
                "properties": {
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "remark": {
                        "type": "string",
                        "example": 1,
                        "description": "备注"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "状态",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "SkuCategoryUpdateRequest"
            },
            "SkuCreateRequest": {
                "type": "object",
                "required": [
                    "categoryId",
                    "en",
                    "status",
                    "zh"
                ],
                "properties": {
                    "brand": {
                        "type": "string",
                        "example": 1,
                        "description": "品牌"
                    },
                    "categoryId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "SKU类目ID"
                    },
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "purchaseQuoteTemplateId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购报价模板"
                    },
                    "purchaseResourceTemplateId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购资源模板"
                    },
                    "remark": {
                        "type": "string",
                        "example": 1,
                        "description": "备注"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "状态",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "SkuCreateRequest"
            },
            "SkuTemplate": {
                "type": "object",
                "properties": {
                    "templateId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "模板 ID"
                    },
                    "templateType": {
                        "type": "integer",
                        "format": "int32",
                        "description": "模板类型, 0:PR模版 1:报价模版"
                    }
                },
                "title": "SkuTemplate"
            },
            "SkuUpdateRequest": {
                "type": "object",
                "required": [
                    "en",
                    "status",
                    "zh"
                ],
                "properties": {
                    "brand": {
                        "type": "string",
                        "example": 1,
                        "description": "品牌"
                    },
                    "en": {
                        "type": "string",
                        "example": 1,
                        "description": "英文名称"
                    },
                    "purchaseQuoteTemplateId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购报价模板"
                    },
                    "purchaseResourceTemplateId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "采购资源模板"
                    },
                    "remark": {
                        "type": "string",
                        "example": 1,
                        "description": "备注"
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "状态",
                        "enum": [
                            0,
                            1
                        ]
                    },
                    "zh": {
                        "type": "string",
                        "example": 1,
                        "description": "中文名称"
                    }
                },
                "title": "SkuUpdateRequest"
            },
            "UploadConfigObj": {
                "type": "object",
                "title": "UploadConfigObj"
            },
            "VendorBO": {
                "type": "object",
                "properties": {
                    "address": {
                        "type": "string"
                    },
                    "bankAccount": {
                        "type": "string"
                    },
                    "bankName": {
                        "type": "string"
                    },
                    "city": {
                        "type": "string"
                    },
                    "code": {
                        "type": "string"
                    },
                    "contact": {
                        "type": "string"
                    },
                    "country": {
                        "type": "string"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "currencyId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "currencyName": {
                        "type": "string",
                        "description": "币种名称"
                    },
                    "email": {
                        "type": "string"
                    },
                    "exchangeRate": {
                        "type": "number",
                        "description": "当前币种转 USD 汇率"
                    },
                    "genBusPostingGroup": {
                        "type": "integer",
                        "format": "int32",
                        "minimum": -128,
                        "maximum": 127
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "mailingAddress": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "payable": {
                        "type": "integer",
                        "format": "int64"
                    },
                    "paymentTermsCode": {
                        "type": "string"
                    },
                    "phone": {
                        "type": "string"
                    },
                    "purchaseRep": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "shortname": {
                        "type": "string"
                    },
                    "singingEntity": {
                        "type": "integer",
                        "format": "int32",
                        "minimum": -128,
                        "maximum": 127
                    },
                    "status": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "supportInfo": {
                        "type": "string"
                    },
                    "taxCode": {
                        "type": "string"
                    },
                    "typeId": {
                        "type": "string"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "userId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "vTime": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "vendorPostingGroup": {
                        "type": "integer",
                        "format": "int32",
                        "minimum": -128,
                        "maximum": 127
                    },
                    "woId": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "zipCode": {
                        "type": "string"
                    }
                },
                "title": "VendorBO"
            },
            "View": {
                "type": "object",
                "properties": {
                    "contentType": {
                        "type": "string"
                    }
                },
                "title": "View"
            },
            "采购交付-工单配置": {
                "type": "object",
                "properties": {
                    "createBy": {
                        "type": "string",
                        "description": "创建人 UID"
                    },
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "del": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "删除状态, 1:删除, 0:未删除"
                    },
                    "deleteTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "删除时间"
                    },
                    "deliveryType": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "交付类型, 1: 工单, 2: SKU, 3: PO Detail, 4: Qty"
                    },
                    "deploymentDefineId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "流程定义 ID"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "对象ID"
                    },
                    "name": {
                        "type": "string",
                        "description": "名称"
                    },
                    "remark": {
                        "type": "string",
                        "description": "备注"
                    },
                    "sanEmailCcList": {
                        "type": "string",
                        "description": "SAN 抄送人列表"
                    },
                    "sanEmailToList": {
                        "type": "string",
                        "description": "SAN 接收人列表"
                    },
                    "updateBy": {
                        "type": "string",
                        "description": "更新人 UID"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "更新时间"
                    }
                },
                "title": "采购交付-工单配置"
            },
            "采购交付-工单配置-SKU": {
                "type": "object",
                "properties": {
                    "createTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "创建时间"
                    },
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "operateResult": {
                        "type": "string",
                        "description": "操作结果"
                    },
                    "purchaseDeliveryDeploymentDefineId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "采购交付工单配置 ID"
                    },
                    "skuDescriptionEn": {
                        "type": "string",
                        "description": "SKU 英文描述"
                    },
                    "skuDescriptionZh": {
                        "type": "string",
                        "description": "SKU 中文描述"
                    },
                    "skuId": {
                        "type": "integer",
                        "format": "int32",
                        "description": "SKU ID"
                    },
                    "success": {
                        "type": "boolean",
                        "description": "保存成功标识"
                    },
                    "updateTime": {
                        "type": "string",
                        "format": "date-time",
                        "description": "修改时间"
                    }
                },
                "title": "采购交付-工单配置-SKU"
            },
            "采购交付-工单配置-关联SKU": {
                "type": "object",
                "required": [
                    "deploymentDefineId",
                    "skuIds"
                ],
                "properties": {
                    "deploymentDefineId": {
                        "type": "integer",
                        "format": "int32",
                        "example": 1,
                        "description": "流程定义 ID"
                    },
                    "skuIds": {
                        "type": "array",
                        "example": 1,
                        "description": "SKU IDs",
                        "items": {
                            "type": "integer",
                            "format": "int32"
                        }
                    }
                },
                "title": "采购交付-工单配置-关联SKU"
            },
            "采购报价备注更新请求": {
                "type": "object",
                "properties": {
                    "orderNo": {
                        "type": "string",
                        "description": "报价订单号"
                    },
                    "remark": {
                        "type": "string",
                        "description": "备注"
                    }
                },
                "title": "采购报价备注更新请求"
            },
            "采购报价订单同步": {
                "type": "object",
                "properties": {
                    "orderCreateTimeBegin": {
                        "type": "string",
                        "format": "date-time",
                        "description": "开始同步的订单创建时间"
                    },
                    "orderCreateTimeEnd": {
                        "type": "string",
                        "format": "date-time",
                        "description": "结束同步的订单创建时间，不传则默认到当前时间"
                    }
                },
                "title": "采购报价订单同步"
            }
        }
    },
    "startTime": 1579406649903,
    "expires": 86400
}