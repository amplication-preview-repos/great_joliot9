/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmployerService } from "../employer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployerCreateInput } from "./EmployerCreateInput";
import { Employer } from "./Employer";
import { EmployerFindManyArgs } from "./EmployerFindManyArgs";
import { EmployerWhereUniqueInput } from "./EmployerWhereUniqueInput";
import { EmployerUpdateInput } from "./EmployerUpdateInput";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployerControllerBase {
  constructor(
    protected readonly service: EmployerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employer })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployer(
    @common.Body() data: EmployerCreateInput
  ): Promise<Employer> {
    return await this.service.createEmployer({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        companyName: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Employer] })
  @ApiNestedQuery(EmployerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employers(@common.Req() request: Request): Promise<Employer[]> {
    const args = plainToClass(EmployerFindManyArgs, request.query);
    return this.service.employers({
      ...args,
      select: {
        companyName: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employer(
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Employer | null> {
    const result = await this.service.employer({
      where: params,
      select: {
        companyName: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        website: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployer(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() data: EmployerUpdateInput
  ): Promise<Employer | null> {
    try {
      return await this.service.updateEmployer({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          companyName: true,
          createdAt: true,
          id: true,
          location: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployer(
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Employer | null> {
    try {
      return await this.service.deleteEmployer({
        where: params,
        select: {
          companyName: true,
          createdAt: true,
          id: true,
          location: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/jobs")
  @ApiNestedQuery(JobFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  async findJobs(
    @common.Req() request: Request,
    @common.Param() params: EmployerWhereUniqueInput
  ): Promise<Job[]> {
    const query = plainToClass(JobFindManyArgs, request.query);
    const results = await this.service.findJobs(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        employer: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        salary: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobs")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async connectJobs(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        connect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobs")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async updateJobs(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        set: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobs")
  @nestAccessControl.UseRoles({
    resource: "Employer",
    action: "update",
    possession: "any",
  })
  async disconnectJobs(
    @common.Param() params: EmployerWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        disconnect: body,
      },
    };
    await this.service.updateEmployer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
