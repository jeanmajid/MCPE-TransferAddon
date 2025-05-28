import { world } from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";
import { config } from "./config";

world.afterEvents.playerSpawn.subscribe(({ player }) => {
    transferPlayer(player, config.targetIp, config.targetport);
});