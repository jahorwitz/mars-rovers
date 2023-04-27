export namespace Rover {
  export interface Camera {
    name: string;
    full_name: string;
  }

  export interface Photo {
    id: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Pick<Rover, "name" | "landing_date" | "launch_date">;
  }
}
export type Rover = {
  name: string;
  landing_date: string;
  launch_date: string;
  max_date: string;
  cameras: Rover.Camera[];
  total_photos: number;
};
