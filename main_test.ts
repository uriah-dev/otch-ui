import { assertEquals } from "@std/assert";
import { add } from "@ot/cli";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
