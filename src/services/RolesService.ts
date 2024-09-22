import { IRolesRepository, IRolesService, Roles } from "types/RolesTypes";

export class RolesService implements IRolesService {
  private rolesRepository: IRolesRepository;

  constructor(rolesRepository: IRolesRepository) {
    this.rolesRepository = rolesRepository;
  }

  async createRoles(Roles: Roles): Promise<Roles> {
    return this.rolesRepository.create(Roles);
  }

  async findRoles(): Promise<Roles[]> {
    return this.rolesRepository.find();
  }

  async findRolesById(id: string): Promise<Roles | null> {
    return this.rolesRepository.findById(id);
  }

  async updateRoles(id: string, Roles: Partial<Roles>): Promise<Roles | null> {
    return this.rolesRepository.update(id, Roles);
  }

  async deleteRoles(id: string): Promise<boolean> {
    return this.rolesRepository.delete(id);
  }
}
