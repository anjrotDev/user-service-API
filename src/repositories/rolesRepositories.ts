import { RolesModel } from "@models/Roles";
import { Query } from "types/RepositoryTypes";
import { IRolesRepository, Roles } from "types/RolesTypes";

export class RolesRepository implements IRolesRepository {
  async create(data: Roles): Promise<Roles> {
    const newRoles = new RolesModel(data);
    return await newRoles.save();
  }

  async find(query?: Query): Promise<Roles[]> {
    return await RolesModel.find(query || {}).exec();
  }

  async findById(id: string): Promise<Roles | null> {
    return await RolesModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Roles>): Promise<Roles | null> {
    return await RolesModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await RolesModel.findByIdAndDelete(id).exec();
    return deleted !== null;
  }
}
