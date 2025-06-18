import { system, world } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import { transferPlayer } from "@minecraft/server-admin";

world.afterEvents.playerSpawn.subscribe(async ({ player }) => {
    const ip = world.getDynamicProperty("ip");
    const port = world.getDynamicProperty("port");

    if (!ip || !port) {
        await PromptIpAndPort(player);
        return;
    }

    transferPlayer(player, { hostname: ip, port });
});

async function PromptIpAndPort(player) {
    await system.waitTicks(20);

    const form = new ModalFormData();
    form.title("TransferServer Setup");
    form.textField("Server Ip", "IP");
    form.textField("Server Port", "19132", "19132");

    const res = await form.show(player);

    if (res.canceled || !res.formValues) {
        PromptIpAndPort(player);
        return;
    }

    const ipValue = res.formValues[0];
    const portValue = parseInt(res.formValues[1]);
    if (!ipValue || !portValue || isNaN(portValue)) {
        PromptIpAndPort(player);
        return;
    }

    world.setDynamicProperty("ip", ipValue);
    world.setDynamicProperty("port", portValue);

    transferPlayer(player, ipValue, portValue);
}
